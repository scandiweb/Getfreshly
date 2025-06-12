import { useState, useCallback, useEffect } from 'react';

export function useCookie<T>(
  key: string,
  initialValue: T,
  options: {
    maxAge?: number; // in seconds
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  } = {},
): [T, (value: T | ((val: T) => T)) => void] {
  const {
    maxAge = 60 * 60 * 24 * 7, // Default: 7 days
    path = '/',
    domain,
    secure,
    sameSite = 'lax',
  } = options;

  // Helper function to get cookie value
  const getCookieValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${key}=`))
        ?.split('=')[1];

      if (cookieValue) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
      return initialValue;
    } catch (error) {
      console.error(`Error reading cookie "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  // Initialize state with cookie value
  const [storedValue, setStoredValue] = useState<T>(getCookieValue);

  // Helper function to set cookie
  const setCookieValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        // Save to cookie
        if (typeof window !== 'undefined') {
          const cookieOptions = [
            `${key}=${encodeURIComponent(JSON.stringify(valueToStore))}`,
            `path=${path}`,
            `max-age=${maxAge}`,
            ...(domain ? [`domain=${domain}`] : []),
            ...(secure ? ['secure'] : []),
            `samesite=${sameSite}`,
          ];

          document.cookie = cookieOptions.join('; ');
        }
      } catch (error) {
        console.error(`Error setting cookie "${key}":`, error);
      }
    },
    [key, storedValue, maxAge, path, domain, secure, sameSite],
  );

  // Sync state with cookie changes (e.g., from other tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      const cookieValue = getCookieValue();
      if (JSON.stringify(cookieValue) !== JSON.stringify(storedValue)) {
        setStoredValue(cookieValue);
      }
    };

    // Listen for storage events (cookie changes from other tabs)
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [getCookieValue, storedValue]);

  return [storedValue, setCookieValue];
}
