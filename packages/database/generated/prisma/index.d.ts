
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model LinkedAccount
 * 
 */
export type LinkedAccount = $Result.DefaultSelection<Prisma.$LinkedAccountPayload>
/**
 * Model AdAccount
 * 
 */
export type AdAccount = $Result.DefaultSelection<Prisma.$AdAccountPayload>
/**
 * Model AdPerformanceSnapshot
 * 
 */
export type AdPerformanceSnapshot = $Result.DefaultSelection<Prisma.$AdPerformanceSnapshotPayload>
/**
 * Model AdPerformanceData
 * 
 */
export type AdPerformanceData = $Result.DefaultSelection<Prisma.$AdPerformanceDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Messages
 * const messages = await prisma.message.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedAccount`: Exposes CRUD operations for the **LinkedAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedAccounts
    * const linkedAccounts = await prisma.linkedAccount.findMany()
    * ```
    */
  get linkedAccount(): Prisma.LinkedAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adAccount`: Exposes CRUD operations for the **AdAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdAccounts
    * const adAccounts = await prisma.adAccount.findMany()
    * ```
    */
  get adAccount(): Prisma.AdAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adPerformanceSnapshot`: Exposes CRUD operations for the **AdPerformanceSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdPerformanceSnapshots
    * const adPerformanceSnapshots = await prisma.adPerformanceSnapshot.findMany()
    * ```
    */
  get adPerformanceSnapshot(): Prisma.AdPerformanceSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adPerformanceData`: Exposes CRUD operations for the **AdPerformanceData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdPerformanceData
    * const adPerformanceData = await prisma.adPerformanceData.findMany()
    * ```
    */
  get adPerformanceData(): Prisma.AdPerformanceDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Message: 'Message',
    LinkedAccount: 'LinkedAccount',
    AdAccount: 'AdAccount',
    AdPerformanceSnapshot: 'AdPerformanceSnapshot',
    AdPerformanceData: 'AdPerformanceData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "message" | "linkedAccount" | "adAccount" | "adPerformanceSnapshot" | "adPerformanceData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      LinkedAccount: {
        payload: Prisma.$LinkedAccountPayload<ExtArgs>
        fields: Prisma.LinkedAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findFirst: {
            args: Prisma.LinkedAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findMany: {
            args: Prisma.LinkedAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          create: {
            args: Prisma.LinkedAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          createMany: {
            args: Prisma.LinkedAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          delete: {
            args: Prisma.LinkedAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          update: {
            args: Prisma.LinkedAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          deleteMany: {
            args: Prisma.LinkedAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          upsert: {
            args: Prisma.LinkedAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          aggregate: {
            args: Prisma.LinkedAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedAccount>
          }
          groupBy: {
            args: Prisma.LinkedAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountCountAggregateOutputType> | number
          }
        }
      }
      AdAccount: {
        payload: Prisma.$AdAccountPayload<ExtArgs>
        fields: Prisma.AdAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          findFirst: {
            args: Prisma.AdAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          findMany: {
            args: Prisma.AdAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>[]
          }
          create: {
            args: Prisma.AdAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          createMany: {
            args: Prisma.AdAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>[]
          }
          delete: {
            args: Prisma.AdAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          update: {
            args: Prisma.AdAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          deleteMany: {
            args: Prisma.AdAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>[]
          }
          upsert: {
            args: Prisma.AdAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAccountPayload>
          }
          aggregate: {
            args: Prisma.AdAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdAccount>
          }
          groupBy: {
            args: Prisma.AdAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AdAccountCountAggregateOutputType> | number
          }
        }
      }
      AdPerformanceSnapshot: {
        payload: Prisma.$AdPerformanceSnapshotPayload<ExtArgs>
        fields: Prisma.AdPerformanceSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdPerformanceSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdPerformanceSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          findFirst: {
            args: Prisma.AdPerformanceSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdPerformanceSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          findMany: {
            args: Prisma.AdPerformanceSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>[]
          }
          create: {
            args: Prisma.AdPerformanceSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          createMany: {
            args: Prisma.AdPerformanceSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdPerformanceSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>[]
          }
          delete: {
            args: Prisma.AdPerformanceSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          update: {
            args: Prisma.AdPerformanceSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.AdPerformanceSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdPerformanceSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdPerformanceSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.AdPerformanceSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceSnapshotPayload>
          }
          aggregate: {
            args: Prisma.AdPerformanceSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdPerformanceSnapshot>
          }
          groupBy: {
            args: Prisma.AdPerformanceSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdPerformanceSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdPerformanceSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<AdPerformanceSnapshotCountAggregateOutputType> | number
          }
        }
      }
      AdPerformanceData: {
        payload: Prisma.$AdPerformanceDataPayload<ExtArgs>
        fields: Prisma.AdPerformanceDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdPerformanceDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdPerformanceDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          findFirst: {
            args: Prisma.AdPerformanceDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdPerformanceDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          findMany: {
            args: Prisma.AdPerformanceDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>[]
          }
          create: {
            args: Prisma.AdPerformanceDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          createMany: {
            args: Prisma.AdPerformanceDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdPerformanceDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>[]
          }
          delete: {
            args: Prisma.AdPerformanceDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          update: {
            args: Prisma.AdPerformanceDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          deleteMany: {
            args: Prisma.AdPerformanceDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdPerformanceDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdPerformanceDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>[]
          }
          upsert: {
            args: Prisma.AdPerformanceDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPerformanceDataPayload>
          }
          aggregate: {
            args: Prisma.AdPerformanceDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdPerformanceData>
          }
          groupBy: {
            args: Prisma.AdPerformanceDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdPerformanceDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdPerformanceDataCountArgs<ExtArgs>
            result: $Utils.Optional<AdPerformanceDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    message?: MessageOmit
    linkedAccount?: LinkedAccountOmit
    adAccount?: AdAccountOmit
    adPerformanceSnapshot?: AdPerformanceSnapshotOmit
    adPerformanceData?: AdPerformanceDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LinkedAccountCountOutputType
   */

  export type LinkedAccountCountOutputType = {
    adAccounts: number
  }

  export type LinkedAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adAccounts?: boolean | LinkedAccountCountOutputTypeCountAdAccountsArgs
  }

  // Custom InputTypes
  /**
   * LinkedAccountCountOutputType without action
   */
  export type LinkedAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccountCountOutputType
     */
    select?: LinkedAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkedAccountCountOutputType without action
   */
  export type LinkedAccountCountOutputTypeCountAdAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdAccountWhereInput
  }


  /**
   * Count Type AdPerformanceSnapshotCountOutputType
   */

  export type AdPerformanceSnapshotCountOutputType = {
    ads: number
  }

  export type AdPerformanceSnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | AdPerformanceSnapshotCountOutputTypeCountAdsArgs
  }

  // Custom InputTypes
  /**
   * AdPerformanceSnapshotCountOutputType without action
   */
  export type AdPerformanceSnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshotCountOutputType
     */
    select?: AdPerformanceSnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdPerformanceSnapshotCountOutputType without action
   */
  export type AdPerformanceSnapshotCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdPerformanceDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    role: string | null
    isLoading: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    role: string | null
    isLoading: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    role: number
    isLoading: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    role?: true
    isLoading?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    role?: true
    isLoading?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    role?: true
    isLoading?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    userId: string
    role: string
    isLoading: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    role?: boolean
    isLoading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    role?: boolean
    isLoading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    role?: boolean
    isLoading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    role?: boolean
    isLoading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "role" | "isLoading" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      role: string
      isLoading: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'String'>
    readonly isLoading: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model LinkedAccount
   */

  export type AggregateLinkedAccount = {
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  export type LinkedAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountType: string | null
    accessToken: string | null
    accountId: string | null
    accountName: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkedAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountType: string | null
    accessToken: string | null
    accountId: string | null
    accountName: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkedAccountCountAggregateOutputType = {
    id: number
    userId: number
    accountType: number
    accessToken: number
    accountId: number
    accountName: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkedAccountMinAggregateInputType = {
    id?: true
    userId?: true
    accountType?: true
    accessToken?: true
    accountId?: true
    accountName?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkedAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    accountType?: true
    accessToken?: true
    accountId?: true
    accountName?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkedAccountCountAggregateInputType = {
    id?: true
    userId?: true
    accountType?: true
    accessToken?: true
    accountId?: true
    accountName?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkedAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccount to aggregate.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedAccounts
    **/
    _count?: true | LinkedAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type GetLinkedAccountAggregateType<T extends LinkedAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedAccount[P]>
      : GetScalarType<T[P], AggregateLinkedAccount[P]>
  }




  export type LinkedAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountWhereInput
    orderBy?: LinkedAccountOrderByWithAggregationInput | LinkedAccountOrderByWithAggregationInput[]
    by: LinkedAccountScalarFieldEnum[] | LinkedAccountScalarFieldEnum
    having?: LinkedAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedAccountCountAggregateInputType | true
    _min?: LinkedAccountMinAggregateInputType
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type LinkedAccountGroupByOutputType = {
    id: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  type GetLinkedAccountGroupByPayload<T extends LinkedAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
        }
      >
    >


  export type LinkedAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountType?: boolean
    accessToken?: boolean
    accountId?: boolean
    accountName?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adAccounts?: boolean | LinkedAccount$adAccountsArgs<ExtArgs>
    _count?: boolean | LinkedAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountType?: boolean
    accessToken?: boolean
    accountId?: boolean
    accountName?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountType?: boolean
    accessToken?: boolean
    accountId?: boolean
    accountName?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    accountType?: boolean
    accessToken?: boolean
    accountId?: boolean
    accountName?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkedAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountType" | "accessToken" | "accountId" | "accountName" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["linkedAccount"]>
  export type LinkedAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adAccounts?: boolean | LinkedAccount$adAccountsArgs<ExtArgs>
    _count?: boolean | LinkedAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkedAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LinkedAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinkedAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedAccount"
    objects: {
      adAccounts: Prisma.$AdAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountType: string
      accessToken: string
      accountId: string
      accountName: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["linkedAccount"]>
    composites: {}
  }

  type LinkedAccountGetPayload<S extends boolean | null | undefined | LinkedAccountDefaultArgs> = $Result.GetResult<Prisma.$LinkedAccountPayload, S>

  type LinkedAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedAccountCountAggregateInputType | true
    }

  export interface LinkedAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedAccount'], meta: { name: 'LinkedAccount' } }
    /**
     * Find zero or one LinkedAccount that matches the filter.
     * @param {LinkedAccountFindUniqueArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedAccountFindUniqueArgs>(args: SelectSubset<T, LinkedAccountFindUniqueArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedAccountFindUniqueOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedAccountFindFirstArgs>(args?: SelectSubset<T, LinkedAccountFindFirstArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany()
     * 
     * // Get first 10 LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedAccountFindManyArgs>(args?: SelectSubset<T, LinkedAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedAccount.
     * @param {LinkedAccountCreateArgs} args - Arguments to create a LinkedAccount.
     * @example
     * // Create one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.create({
     *   data: {
     *     // ... data to create a LinkedAccount
     *   }
     * })
     * 
     */
    create<T extends LinkedAccountCreateArgs>(args: SelectSubset<T, LinkedAccountCreateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedAccounts.
     * @param {LinkedAccountCreateManyArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedAccountCreateManyArgs>(args?: SelectSubset<T, LinkedAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedAccounts and returns the data saved in the database.
     * @param {LinkedAccountCreateManyAndReturnArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedAccount.
     * @param {LinkedAccountDeleteArgs} args - Arguments to delete one LinkedAccount.
     * @example
     * // Delete one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.delete({
     *   where: {
     *     // ... filter to delete one LinkedAccount
     *   }
     * })
     * 
     */
    delete<T extends LinkedAccountDeleteArgs>(args: SelectSubset<T, LinkedAccountDeleteArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedAccount.
     * @param {LinkedAccountUpdateArgs} args - Arguments to update one LinkedAccount.
     * @example
     * // Update one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedAccountUpdateArgs>(args: SelectSubset<T, LinkedAccountUpdateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedAccounts.
     * @param {LinkedAccountDeleteManyArgs} args - Arguments to filter LinkedAccounts to delete.
     * @example
     * // Delete a few LinkedAccounts
     * const { count } = await prisma.linkedAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedAccountDeleteManyArgs>(args?: SelectSubset<T, LinkedAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedAccountUpdateManyArgs>(args: SelectSubset<T, LinkedAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts and returns the data updated in the database.
     * @param {LinkedAccountUpdateManyAndReturnArgs} args - Arguments to update many LinkedAccounts.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkedAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedAccount.
     * @param {LinkedAccountUpsertArgs} args - Arguments to update or create a LinkedAccount.
     * @example
     * // Update or create a LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.upsert({
     *   create: {
     *     // ... data to create a LinkedAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedAccount we want to update
     *   }
     * })
     */
    upsert<T extends LinkedAccountUpsertArgs>(args: SelectSubset<T, LinkedAccountUpsertArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountCountArgs} args - Arguments to filter LinkedAccounts to count.
     * @example
     * // Count the number of LinkedAccounts
     * const count = await prisma.linkedAccount.count({
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedAccountCountArgs>(
      args?: Subset<T, LinkedAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkedAccountAggregateArgs>(args: Subset<T, LinkedAccountAggregateArgs>): Prisma.PrismaPromise<GetLinkedAccountAggregateType<T>>

    /**
     * Group by LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkedAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedAccountGroupByArgs['orderBy'] }
        : { orderBy?: LinkedAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedAccount model
   */
  readonly fields: LinkedAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adAccounts<T extends LinkedAccount$adAccountsArgs<ExtArgs> = {}>(args?: Subset<T, LinkedAccount$adAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedAccount model
   */
  interface LinkedAccountFieldRefs {
    readonly id: FieldRef<"LinkedAccount", 'String'>
    readonly userId: FieldRef<"LinkedAccount", 'String'>
    readonly accountType: FieldRef<"LinkedAccount", 'String'>
    readonly accessToken: FieldRef<"LinkedAccount", 'String'>
    readonly accountId: FieldRef<"LinkedAccount", 'String'>
    readonly accountName: FieldRef<"LinkedAccount", 'String'>
    readonly expiresAt: FieldRef<"LinkedAccount", 'DateTime'>
    readonly createdAt: FieldRef<"LinkedAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"LinkedAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedAccount findUnique
   */
  export type LinkedAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findUniqueOrThrow
   */
  export type LinkedAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findFirst
   */
  export type LinkedAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findFirstOrThrow
   */
  export type LinkedAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findMany
   */
  export type LinkedAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount create
   */
  export type LinkedAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedAccount.
     */
    data: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
  }

  /**
   * LinkedAccount createMany
   */
  export type LinkedAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedAccount createManyAndReturn
   */
  export type LinkedAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedAccount update
   */
  export type LinkedAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedAccount.
     */
    data: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
    /**
     * Choose, which LinkedAccount to update.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount updateMany
   */
  export type LinkedAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
  }

  /**
   * LinkedAccount updateManyAndReturn
   */
  export type LinkedAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
  }

  /**
   * LinkedAccount upsert
   */
  export type LinkedAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedAccount to update in case it exists.
     */
    where: LinkedAccountWhereUniqueInput
    /**
     * In case the LinkedAccount found by the `where` argument doesn't exist, create a new LinkedAccount with this data.
     */
    create: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
    /**
     * In case the LinkedAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
  }

  /**
   * LinkedAccount delete
   */
  export type LinkedAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter which LinkedAccount to delete.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount deleteMany
   */
  export type LinkedAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to delete
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to delete.
     */
    limit?: number
  }

  /**
   * LinkedAccount.adAccounts
   */
  export type LinkedAccount$adAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    where?: AdAccountWhereInput
    orderBy?: AdAccountOrderByWithRelationInput | AdAccountOrderByWithRelationInput[]
    cursor?: AdAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdAccountScalarFieldEnum | AdAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount without action
   */
  export type LinkedAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
  }


  /**
   * Model AdAccount
   */

  export type AggregateAdAccount = {
    _count: AdAccountCountAggregateOutputType | null
    _min: AdAccountMinAggregateOutputType | null
    _max: AdAccountMaxAggregateOutputType | null
  }

  export type AdAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    linkedAccountId: string | null
    accountId: string | null
    accountName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    linkedAccountId: string | null
    accountId: string | null
    accountName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdAccountCountAggregateOutputType = {
    id: number
    userId: number
    linkedAccountId: number
    accountId: number
    accountName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdAccountMinAggregateInputType = {
    id?: true
    userId?: true
    linkedAccountId?: true
    accountId?: true
    accountName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    linkedAccountId?: true
    accountId?: true
    accountName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdAccountCountAggregateInputType = {
    id?: true
    userId?: true
    linkedAccountId?: true
    accountId?: true
    accountName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdAccount to aggregate.
     */
    where?: AdAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAccounts to fetch.
     */
    orderBy?: AdAccountOrderByWithRelationInput | AdAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdAccounts
    **/
    _count?: true | AdAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdAccountMaxAggregateInputType
  }

  export type GetAdAccountAggregateType<T extends AdAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAdAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdAccount[P]>
      : GetScalarType<T[P], AggregateAdAccount[P]>
  }




  export type AdAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdAccountWhereInput
    orderBy?: AdAccountOrderByWithAggregationInput | AdAccountOrderByWithAggregationInput[]
    by: AdAccountScalarFieldEnum[] | AdAccountScalarFieldEnum
    having?: AdAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdAccountCountAggregateInputType | true
    _min?: AdAccountMinAggregateInputType
    _max?: AdAccountMaxAggregateInputType
  }

  export type AdAccountGroupByOutputType = {
    id: string
    userId: string
    linkedAccountId: string
    accountId: string
    accountName: string
    createdAt: Date
    updatedAt: Date
    _count: AdAccountCountAggregateOutputType | null
    _min: AdAccountMinAggregateOutputType | null
    _max: AdAccountMaxAggregateOutputType | null
  }

  type GetAdAccountGroupByPayload<T extends AdAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AdAccountGroupByOutputType[P]>
        }
      >
    >


  export type AdAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    linkedAccountId?: boolean
    accountId?: boolean
    accountName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adAccount"]>

  export type AdAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    linkedAccountId?: boolean
    accountId?: boolean
    accountName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adAccount"]>

  export type AdAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    linkedAccountId?: boolean
    accountId?: boolean
    accountName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adAccount"]>

  export type AdAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    linkedAccountId?: boolean
    accountId?: boolean
    accountName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "linkedAccountId" | "accountId" | "accountName" | "createdAt" | "updatedAt", ExtArgs["result"]["adAccount"]>
  export type AdAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }
  export type AdAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }
  export type AdAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccount?: boolean | LinkedAccountDefaultArgs<ExtArgs>
  }

  export type $AdAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdAccount"
    objects: {
      linkedAccount: Prisma.$LinkedAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      linkedAccountId: string
      accountId: string
      accountName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adAccount"]>
    composites: {}
  }

  type AdAccountGetPayload<S extends boolean | null | undefined | AdAccountDefaultArgs> = $Result.GetResult<Prisma.$AdAccountPayload, S>

  type AdAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdAccountCountAggregateInputType | true
    }

  export interface AdAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdAccount'], meta: { name: 'AdAccount' } }
    /**
     * Find zero or one AdAccount that matches the filter.
     * @param {AdAccountFindUniqueArgs} args - Arguments to find a AdAccount
     * @example
     * // Get one AdAccount
     * const adAccount = await prisma.adAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdAccountFindUniqueArgs>(args: SelectSubset<T, AdAccountFindUniqueArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdAccountFindUniqueOrThrowArgs} args - Arguments to find a AdAccount
     * @example
     * // Get one AdAccount
     * const adAccount = await prisma.adAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AdAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountFindFirstArgs} args - Arguments to find a AdAccount
     * @example
     * // Get one AdAccount
     * const adAccount = await prisma.adAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdAccountFindFirstArgs>(args?: SelectSubset<T, AdAccountFindFirstArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountFindFirstOrThrowArgs} args - Arguments to find a AdAccount
     * @example
     * // Get one AdAccount
     * const adAccount = await prisma.adAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AdAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdAccounts
     * const adAccounts = await prisma.adAccount.findMany()
     * 
     * // Get first 10 AdAccounts
     * const adAccounts = await prisma.adAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adAccountWithIdOnly = await prisma.adAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdAccountFindManyArgs>(args?: SelectSubset<T, AdAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdAccount.
     * @param {AdAccountCreateArgs} args - Arguments to create a AdAccount.
     * @example
     * // Create one AdAccount
     * const AdAccount = await prisma.adAccount.create({
     *   data: {
     *     // ... data to create a AdAccount
     *   }
     * })
     * 
     */
    create<T extends AdAccountCreateArgs>(args: SelectSubset<T, AdAccountCreateArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdAccounts.
     * @param {AdAccountCreateManyArgs} args - Arguments to create many AdAccounts.
     * @example
     * // Create many AdAccounts
     * const adAccount = await prisma.adAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdAccountCreateManyArgs>(args?: SelectSubset<T, AdAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdAccounts and returns the data saved in the database.
     * @param {AdAccountCreateManyAndReturnArgs} args - Arguments to create many AdAccounts.
     * @example
     * // Create many AdAccounts
     * const adAccount = await prisma.adAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdAccounts and only return the `id`
     * const adAccountWithIdOnly = await prisma.adAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AdAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdAccount.
     * @param {AdAccountDeleteArgs} args - Arguments to delete one AdAccount.
     * @example
     * // Delete one AdAccount
     * const AdAccount = await prisma.adAccount.delete({
     *   where: {
     *     // ... filter to delete one AdAccount
     *   }
     * })
     * 
     */
    delete<T extends AdAccountDeleteArgs>(args: SelectSubset<T, AdAccountDeleteArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdAccount.
     * @param {AdAccountUpdateArgs} args - Arguments to update one AdAccount.
     * @example
     * // Update one AdAccount
     * const adAccount = await prisma.adAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdAccountUpdateArgs>(args: SelectSubset<T, AdAccountUpdateArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdAccounts.
     * @param {AdAccountDeleteManyArgs} args - Arguments to filter AdAccounts to delete.
     * @example
     * // Delete a few AdAccounts
     * const { count } = await prisma.adAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdAccountDeleteManyArgs>(args?: SelectSubset<T, AdAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdAccounts
     * const adAccount = await prisma.adAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdAccountUpdateManyArgs>(args: SelectSubset<T, AdAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdAccounts and returns the data updated in the database.
     * @param {AdAccountUpdateManyAndReturnArgs} args - Arguments to update many AdAccounts.
     * @example
     * // Update many AdAccounts
     * const adAccount = await prisma.adAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdAccounts and only return the `id`
     * const adAccountWithIdOnly = await prisma.adAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AdAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdAccount.
     * @param {AdAccountUpsertArgs} args - Arguments to update or create a AdAccount.
     * @example
     * // Update or create a AdAccount
     * const adAccount = await prisma.adAccount.upsert({
     *   create: {
     *     // ... data to create a AdAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdAccount we want to update
     *   }
     * })
     */
    upsert<T extends AdAccountUpsertArgs>(args: SelectSubset<T, AdAccountUpsertArgs<ExtArgs>>): Prisma__AdAccountClient<$Result.GetResult<Prisma.$AdAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountCountArgs} args - Arguments to filter AdAccounts to count.
     * @example
     * // Count the number of AdAccounts
     * const count = await prisma.adAccount.count({
     *   where: {
     *     // ... the filter for the AdAccounts we want to count
     *   }
     * })
    **/
    count<T extends AdAccountCountArgs>(
      args?: Subset<T, AdAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdAccountAggregateArgs>(args: Subset<T, AdAccountAggregateArgs>): Prisma.PrismaPromise<GetAdAccountAggregateType<T>>

    /**
     * Group by AdAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdAccountGroupByArgs['orderBy'] }
        : { orderBy?: AdAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdAccount model
   */
  readonly fields: AdAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linkedAccount<T extends LinkedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinkedAccountDefaultArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdAccount model
   */
  interface AdAccountFieldRefs {
    readonly id: FieldRef<"AdAccount", 'String'>
    readonly userId: FieldRef<"AdAccount", 'String'>
    readonly linkedAccountId: FieldRef<"AdAccount", 'String'>
    readonly accountId: FieldRef<"AdAccount", 'String'>
    readonly accountName: FieldRef<"AdAccount", 'String'>
    readonly createdAt: FieldRef<"AdAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AdAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdAccount findUnique
   */
  export type AdAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdAccount to fetch.
     */
    where: AdAccountWhereUniqueInput
  }

  /**
   * AdAccount findUniqueOrThrow
   */
  export type AdAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdAccount to fetch.
     */
    where: AdAccountWhereUniqueInput
  }

  /**
   * AdAccount findFirst
   */
  export type AdAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdAccount to fetch.
     */
    where?: AdAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAccounts to fetch.
     */
    orderBy?: AdAccountOrderByWithRelationInput | AdAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdAccounts.
     */
    cursor?: AdAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdAccounts.
     */
    distinct?: AdAccountScalarFieldEnum | AdAccountScalarFieldEnum[]
  }

  /**
   * AdAccount findFirstOrThrow
   */
  export type AdAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdAccount to fetch.
     */
    where?: AdAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAccounts to fetch.
     */
    orderBy?: AdAccountOrderByWithRelationInput | AdAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdAccounts.
     */
    cursor?: AdAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdAccounts.
     */
    distinct?: AdAccountScalarFieldEnum | AdAccountScalarFieldEnum[]
  }

  /**
   * AdAccount findMany
   */
  export type AdAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdAccounts to fetch.
     */
    where?: AdAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAccounts to fetch.
     */
    orderBy?: AdAccountOrderByWithRelationInput | AdAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdAccounts.
     */
    cursor?: AdAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAccounts.
     */
    skip?: number
    distinct?: AdAccountScalarFieldEnum | AdAccountScalarFieldEnum[]
  }

  /**
   * AdAccount create
   */
  export type AdAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AdAccount.
     */
    data: XOR<AdAccountCreateInput, AdAccountUncheckedCreateInput>
  }

  /**
   * AdAccount createMany
   */
  export type AdAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdAccounts.
     */
    data: AdAccountCreateManyInput | AdAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdAccount createManyAndReturn
   */
  export type AdAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AdAccounts.
     */
    data: AdAccountCreateManyInput | AdAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdAccount update
   */
  export type AdAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AdAccount.
     */
    data: XOR<AdAccountUpdateInput, AdAccountUncheckedUpdateInput>
    /**
     * Choose, which AdAccount to update.
     */
    where: AdAccountWhereUniqueInput
  }

  /**
   * AdAccount updateMany
   */
  export type AdAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdAccounts.
     */
    data: XOR<AdAccountUpdateManyMutationInput, AdAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdAccounts to update
     */
    where?: AdAccountWhereInput
    /**
     * Limit how many AdAccounts to update.
     */
    limit?: number
  }

  /**
   * AdAccount updateManyAndReturn
   */
  export type AdAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * The data used to update AdAccounts.
     */
    data: XOR<AdAccountUpdateManyMutationInput, AdAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdAccounts to update
     */
    where?: AdAccountWhereInput
    /**
     * Limit how many AdAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdAccount upsert
   */
  export type AdAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AdAccount to update in case it exists.
     */
    where: AdAccountWhereUniqueInput
    /**
     * In case the AdAccount found by the `where` argument doesn't exist, create a new AdAccount with this data.
     */
    create: XOR<AdAccountCreateInput, AdAccountUncheckedCreateInput>
    /**
     * In case the AdAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdAccountUpdateInput, AdAccountUncheckedUpdateInput>
  }

  /**
   * AdAccount delete
   */
  export type AdAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
    /**
     * Filter which AdAccount to delete.
     */
    where: AdAccountWhereUniqueInput
  }

  /**
   * AdAccount deleteMany
   */
  export type AdAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdAccounts to delete
     */
    where?: AdAccountWhereInput
    /**
     * Limit how many AdAccounts to delete.
     */
    limit?: number
  }

  /**
   * AdAccount without action
   */
  export type AdAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAccount
     */
    select?: AdAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdAccount
     */
    omit?: AdAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountInclude<ExtArgs> | null
  }


  /**
   * Model AdPerformanceSnapshot
   */

  export type AggregateAdPerformanceSnapshot = {
    _count: AdPerformanceSnapshotCountAggregateOutputType | null
    _avg: AdPerformanceSnapshotAvgAggregateOutputType | null
    _sum: AdPerformanceSnapshotSumAggregateOutputType | null
    _min: AdPerformanceSnapshotMinAggregateOutputType | null
    _max: AdPerformanceSnapshotMaxAggregateOutputType | null
  }

  export type AdPerformanceSnapshotAvgAggregateOutputType = {
    totalAdsAnalyzed: number | null
    averageImpressions: number | null
    averageCTR: number | null
    totalSpend: number | null
    totalImpressions: number | null
    totalClicks: number | null
    overallCTR: number | null
    activeCampaigns: number | null
    activeAdSets: number | null
    activeAds: number | null
    totalAds: number | null
  }

  export type AdPerformanceSnapshotSumAggregateOutputType = {
    totalAdsAnalyzed: number | null
    averageImpressions: number | null
    averageCTR: number | null
    totalSpend: number | null
    totalImpressions: number | null
    totalClicks: number | null
    overallCTR: number | null
    activeCampaigns: number | null
    activeAdSets: number | null
    activeAds: number | null
    totalAds: number | null
  }

  export type AdPerformanceSnapshotMinAggregateOutputType = {
    id: string | null
    userId: string | null
    facebookAdAccountId: string | null
    totalAdsAnalyzed: number | null
    averageImpressions: number | null
    averageCTR: number | null
    totalSpend: number | null
    totalImpressions: number | null
    totalClicks: number | null
    overallCTR: number | null
    activeCampaigns: number | null
    activeAdSets: number | null
    activeAds: number | null
    totalAds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdPerformanceSnapshotMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    facebookAdAccountId: string | null
    totalAdsAnalyzed: number | null
    averageImpressions: number | null
    averageCTR: number | null
    totalSpend: number | null
    totalImpressions: number | null
    totalClicks: number | null
    overallCTR: number | null
    activeCampaigns: number | null
    activeAdSets: number | null
    activeAds: number | null
    totalAds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdPerformanceSnapshotCountAggregateOutputType = {
    id: number
    userId: number
    facebookAdAccountId: number
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend: number
    totalImpressions: number
    totalClicks: number
    overallCTR: number
    activeCampaigns: number
    activeAdSets: number
    activeAds: number
    totalAds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdPerformanceSnapshotAvgAggregateInputType = {
    totalAdsAnalyzed?: true
    averageImpressions?: true
    averageCTR?: true
    totalSpend?: true
    totalImpressions?: true
    totalClicks?: true
    overallCTR?: true
    activeCampaigns?: true
    activeAdSets?: true
    activeAds?: true
    totalAds?: true
  }

  export type AdPerformanceSnapshotSumAggregateInputType = {
    totalAdsAnalyzed?: true
    averageImpressions?: true
    averageCTR?: true
    totalSpend?: true
    totalImpressions?: true
    totalClicks?: true
    overallCTR?: true
    activeCampaigns?: true
    activeAdSets?: true
    activeAds?: true
    totalAds?: true
  }

  export type AdPerformanceSnapshotMinAggregateInputType = {
    id?: true
    userId?: true
    facebookAdAccountId?: true
    totalAdsAnalyzed?: true
    averageImpressions?: true
    averageCTR?: true
    totalSpend?: true
    totalImpressions?: true
    totalClicks?: true
    overallCTR?: true
    activeCampaigns?: true
    activeAdSets?: true
    activeAds?: true
    totalAds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdPerformanceSnapshotMaxAggregateInputType = {
    id?: true
    userId?: true
    facebookAdAccountId?: true
    totalAdsAnalyzed?: true
    averageImpressions?: true
    averageCTR?: true
    totalSpend?: true
    totalImpressions?: true
    totalClicks?: true
    overallCTR?: true
    activeCampaigns?: true
    activeAdSets?: true
    activeAds?: true
    totalAds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdPerformanceSnapshotCountAggregateInputType = {
    id?: true
    userId?: true
    facebookAdAccountId?: true
    totalAdsAnalyzed?: true
    averageImpressions?: true
    averageCTR?: true
    totalSpend?: true
    totalImpressions?: true
    totalClicks?: true
    overallCTR?: true
    activeCampaigns?: true
    activeAdSets?: true
    activeAds?: true
    totalAds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdPerformanceSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPerformanceSnapshot to aggregate.
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceSnapshots to fetch.
     */
    orderBy?: AdPerformanceSnapshotOrderByWithRelationInput | AdPerformanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdPerformanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdPerformanceSnapshots
    **/
    _count?: true | AdPerformanceSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdPerformanceSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdPerformanceSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdPerformanceSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdPerformanceSnapshotMaxAggregateInputType
  }

  export type GetAdPerformanceSnapshotAggregateType<T extends AdPerformanceSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateAdPerformanceSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdPerformanceSnapshot[P]>
      : GetScalarType<T[P], AggregateAdPerformanceSnapshot[P]>
  }




  export type AdPerformanceSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdPerformanceSnapshotWhereInput
    orderBy?: AdPerformanceSnapshotOrderByWithAggregationInput | AdPerformanceSnapshotOrderByWithAggregationInput[]
    by: AdPerformanceSnapshotScalarFieldEnum[] | AdPerformanceSnapshotScalarFieldEnum
    having?: AdPerformanceSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdPerformanceSnapshotCountAggregateInputType | true
    _avg?: AdPerformanceSnapshotAvgAggregateInputType
    _sum?: AdPerformanceSnapshotSumAggregateInputType
    _min?: AdPerformanceSnapshotMinAggregateInputType
    _max?: AdPerformanceSnapshotMaxAggregateInputType
  }

  export type AdPerformanceSnapshotGroupByOutputType = {
    id: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend: number
    totalImpressions: number
    totalClicks: number
    overallCTR: number
    activeCampaigns: number
    activeAdSets: number
    activeAds: number
    totalAds: number
    createdAt: Date
    updatedAt: Date
    _count: AdPerformanceSnapshotCountAggregateOutputType | null
    _avg: AdPerformanceSnapshotAvgAggregateOutputType | null
    _sum: AdPerformanceSnapshotSumAggregateOutputType | null
    _min: AdPerformanceSnapshotMinAggregateOutputType | null
    _max: AdPerformanceSnapshotMaxAggregateOutputType | null
  }

  type GetAdPerformanceSnapshotGroupByPayload<T extends AdPerformanceSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdPerformanceSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdPerformanceSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdPerformanceSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], AdPerformanceSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type AdPerformanceSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facebookAdAccountId?: boolean
    totalAdsAnalyzed?: boolean
    averageImpressions?: boolean
    averageCTR?: boolean
    totalSpend?: boolean
    totalImpressions?: boolean
    totalClicks?: boolean
    overallCTR?: boolean
    activeCampaigns?: boolean
    activeAdSets?: boolean
    activeAds?: boolean
    totalAds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ads?: boolean | AdPerformanceSnapshot$adsArgs<ExtArgs>
    _count?: boolean | AdPerformanceSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPerformanceSnapshot"]>

  export type AdPerformanceSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facebookAdAccountId?: boolean
    totalAdsAnalyzed?: boolean
    averageImpressions?: boolean
    averageCTR?: boolean
    totalSpend?: boolean
    totalImpressions?: boolean
    totalClicks?: boolean
    overallCTR?: boolean
    activeCampaigns?: boolean
    activeAdSets?: boolean
    activeAds?: boolean
    totalAds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adPerformanceSnapshot"]>

  export type AdPerformanceSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facebookAdAccountId?: boolean
    totalAdsAnalyzed?: boolean
    averageImpressions?: boolean
    averageCTR?: boolean
    totalSpend?: boolean
    totalImpressions?: boolean
    totalClicks?: boolean
    overallCTR?: boolean
    activeCampaigns?: boolean
    activeAdSets?: boolean
    activeAds?: boolean
    totalAds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adPerformanceSnapshot"]>

  export type AdPerformanceSnapshotSelectScalar = {
    id?: boolean
    userId?: boolean
    facebookAdAccountId?: boolean
    totalAdsAnalyzed?: boolean
    averageImpressions?: boolean
    averageCTR?: boolean
    totalSpend?: boolean
    totalImpressions?: boolean
    totalClicks?: boolean
    overallCTR?: boolean
    activeCampaigns?: boolean
    activeAdSets?: boolean
    activeAds?: boolean
    totalAds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdPerformanceSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "facebookAdAccountId" | "totalAdsAnalyzed" | "averageImpressions" | "averageCTR" | "totalSpend" | "totalImpressions" | "totalClicks" | "overallCTR" | "activeCampaigns" | "activeAdSets" | "activeAds" | "totalAds" | "createdAt" | "updatedAt", ExtArgs["result"]["adPerformanceSnapshot"]>
  export type AdPerformanceSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | AdPerformanceSnapshot$adsArgs<ExtArgs>
    _count?: boolean | AdPerformanceSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdPerformanceSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdPerformanceSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdPerformanceSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdPerformanceSnapshot"
    objects: {
      ads: Prisma.$AdPerformanceDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      facebookAdAccountId: string
      totalAdsAnalyzed: number
      averageImpressions: number
      averageCTR: number
      totalSpend: number
      totalImpressions: number
      totalClicks: number
      overallCTR: number
      activeCampaigns: number
      activeAdSets: number
      activeAds: number
      totalAds: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adPerformanceSnapshot"]>
    composites: {}
  }

  type AdPerformanceSnapshotGetPayload<S extends boolean | null | undefined | AdPerformanceSnapshotDefaultArgs> = $Result.GetResult<Prisma.$AdPerformanceSnapshotPayload, S>

  type AdPerformanceSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdPerformanceSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdPerformanceSnapshotCountAggregateInputType | true
    }

  export interface AdPerformanceSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdPerformanceSnapshot'], meta: { name: 'AdPerformanceSnapshot' } }
    /**
     * Find zero or one AdPerformanceSnapshot that matches the filter.
     * @param {AdPerformanceSnapshotFindUniqueArgs} args - Arguments to find a AdPerformanceSnapshot
     * @example
     * // Get one AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdPerformanceSnapshotFindUniqueArgs>(args: SelectSubset<T, AdPerformanceSnapshotFindUniqueArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdPerformanceSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdPerformanceSnapshotFindUniqueOrThrowArgs} args - Arguments to find a AdPerformanceSnapshot
     * @example
     * // Get one AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdPerformanceSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, AdPerformanceSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdPerformanceSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotFindFirstArgs} args - Arguments to find a AdPerformanceSnapshot
     * @example
     * // Get one AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdPerformanceSnapshotFindFirstArgs>(args?: SelectSubset<T, AdPerformanceSnapshotFindFirstArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdPerformanceSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotFindFirstOrThrowArgs} args - Arguments to find a AdPerformanceSnapshot
     * @example
     * // Get one AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdPerformanceSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, AdPerformanceSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdPerformanceSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdPerformanceSnapshots
     * const adPerformanceSnapshots = await prisma.adPerformanceSnapshot.findMany()
     * 
     * // Get first 10 AdPerformanceSnapshots
     * const adPerformanceSnapshots = await prisma.adPerformanceSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adPerformanceSnapshotWithIdOnly = await prisma.adPerformanceSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdPerformanceSnapshotFindManyArgs>(args?: SelectSubset<T, AdPerformanceSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdPerformanceSnapshot.
     * @param {AdPerformanceSnapshotCreateArgs} args - Arguments to create a AdPerformanceSnapshot.
     * @example
     * // Create one AdPerformanceSnapshot
     * const AdPerformanceSnapshot = await prisma.adPerformanceSnapshot.create({
     *   data: {
     *     // ... data to create a AdPerformanceSnapshot
     *   }
     * })
     * 
     */
    create<T extends AdPerformanceSnapshotCreateArgs>(args: SelectSubset<T, AdPerformanceSnapshotCreateArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdPerformanceSnapshots.
     * @param {AdPerformanceSnapshotCreateManyArgs} args - Arguments to create many AdPerformanceSnapshots.
     * @example
     * // Create many AdPerformanceSnapshots
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdPerformanceSnapshotCreateManyArgs>(args?: SelectSubset<T, AdPerformanceSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdPerformanceSnapshots and returns the data saved in the database.
     * @param {AdPerformanceSnapshotCreateManyAndReturnArgs} args - Arguments to create many AdPerformanceSnapshots.
     * @example
     * // Create many AdPerformanceSnapshots
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdPerformanceSnapshots and only return the `id`
     * const adPerformanceSnapshotWithIdOnly = await prisma.adPerformanceSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdPerformanceSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, AdPerformanceSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdPerformanceSnapshot.
     * @param {AdPerformanceSnapshotDeleteArgs} args - Arguments to delete one AdPerformanceSnapshot.
     * @example
     * // Delete one AdPerformanceSnapshot
     * const AdPerformanceSnapshot = await prisma.adPerformanceSnapshot.delete({
     *   where: {
     *     // ... filter to delete one AdPerformanceSnapshot
     *   }
     * })
     * 
     */
    delete<T extends AdPerformanceSnapshotDeleteArgs>(args: SelectSubset<T, AdPerformanceSnapshotDeleteArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdPerformanceSnapshot.
     * @param {AdPerformanceSnapshotUpdateArgs} args - Arguments to update one AdPerformanceSnapshot.
     * @example
     * // Update one AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdPerformanceSnapshotUpdateArgs>(args: SelectSubset<T, AdPerformanceSnapshotUpdateArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdPerformanceSnapshots.
     * @param {AdPerformanceSnapshotDeleteManyArgs} args - Arguments to filter AdPerformanceSnapshots to delete.
     * @example
     * // Delete a few AdPerformanceSnapshots
     * const { count } = await prisma.adPerformanceSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdPerformanceSnapshotDeleteManyArgs>(args?: SelectSubset<T, AdPerformanceSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdPerformanceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdPerformanceSnapshots
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdPerformanceSnapshotUpdateManyArgs>(args: SelectSubset<T, AdPerformanceSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdPerformanceSnapshots and returns the data updated in the database.
     * @param {AdPerformanceSnapshotUpdateManyAndReturnArgs} args - Arguments to update many AdPerformanceSnapshots.
     * @example
     * // Update many AdPerformanceSnapshots
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdPerformanceSnapshots and only return the `id`
     * const adPerformanceSnapshotWithIdOnly = await prisma.adPerformanceSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdPerformanceSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, AdPerformanceSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdPerformanceSnapshot.
     * @param {AdPerformanceSnapshotUpsertArgs} args - Arguments to update or create a AdPerformanceSnapshot.
     * @example
     * // Update or create a AdPerformanceSnapshot
     * const adPerformanceSnapshot = await prisma.adPerformanceSnapshot.upsert({
     *   create: {
     *     // ... data to create a AdPerformanceSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdPerformanceSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends AdPerformanceSnapshotUpsertArgs>(args: SelectSubset<T, AdPerformanceSnapshotUpsertArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdPerformanceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotCountArgs} args - Arguments to filter AdPerformanceSnapshots to count.
     * @example
     * // Count the number of AdPerformanceSnapshots
     * const count = await prisma.adPerformanceSnapshot.count({
     *   where: {
     *     // ... the filter for the AdPerformanceSnapshots we want to count
     *   }
     * })
    **/
    count<T extends AdPerformanceSnapshotCountArgs>(
      args?: Subset<T, AdPerformanceSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdPerformanceSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdPerformanceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdPerformanceSnapshotAggregateArgs>(args: Subset<T, AdPerformanceSnapshotAggregateArgs>): Prisma.PrismaPromise<GetAdPerformanceSnapshotAggregateType<T>>

    /**
     * Group by AdPerformanceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdPerformanceSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdPerformanceSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: AdPerformanceSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdPerformanceSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdPerformanceSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdPerformanceSnapshot model
   */
  readonly fields: AdPerformanceSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdPerformanceSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdPerformanceSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ads<T extends AdPerformanceSnapshot$adsArgs<ExtArgs> = {}>(args?: Subset<T, AdPerformanceSnapshot$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdPerformanceSnapshot model
   */
  interface AdPerformanceSnapshotFieldRefs {
    readonly id: FieldRef<"AdPerformanceSnapshot", 'String'>
    readonly userId: FieldRef<"AdPerformanceSnapshot", 'String'>
    readonly facebookAdAccountId: FieldRef<"AdPerformanceSnapshot", 'String'>
    readonly totalAdsAnalyzed: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly averageImpressions: FieldRef<"AdPerformanceSnapshot", 'Float'>
    readonly averageCTR: FieldRef<"AdPerformanceSnapshot", 'Float'>
    readonly totalSpend: FieldRef<"AdPerformanceSnapshot", 'Float'>
    readonly totalImpressions: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly totalClicks: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly overallCTR: FieldRef<"AdPerformanceSnapshot", 'Float'>
    readonly activeCampaigns: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly activeAdSets: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly activeAds: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly totalAds: FieldRef<"AdPerformanceSnapshot", 'Int'>
    readonly createdAt: FieldRef<"AdPerformanceSnapshot", 'DateTime'>
    readonly updatedAt: FieldRef<"AdPerformanceSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdPerformanceSnapshot findUnique
   */
  export type AdPerformanceSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceSnapshot to fetch.
     */
    where: AdPerformanceSnapshotWhereUniqueInput
  }

  /**
   * AdPerformanceSnapshot findUniqueOrThrow
   */
  export type AdPerformanceSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceSnapshot to fetch.
     */
    where: AdPerformanceSnapshotWhereUniqueInput
  }

  /**
   * AdPerformanceSnapshot findFirst
   */
  export type AdPerformanceSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceSnapshot to fetch.
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceSnapshots to fetch.
     */
    orderBy?: AdPerformanceSnapshotOrderByWithRelationInput | AdPerformanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPerformanceSnapshots.
     */
    cursor?: AdPerformanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPerformanceSnapshots.
     */
    distinct?: AdPerformanceSnapshotScalarFieldEnum | AdPerformanceSnapshotScalarFieldEnum[]
  }

  /**
   * AdPerformanceSnapshot findFirstOrThrow
   */
  export type AdPerformanceSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceSnapshot to fetch.
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceSnapshots to fetch.
     */
    orderBy?: AdPerformanceSnapshotOrderByWithRelationInput | AdPerformanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPerformanceSnapshots.
     */
    cursor?: AdPerformanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPerformanceSnapshots.
     */
    distinct?: AdPerformanceSnapshotScalarFieldEnum | AdPerformanceSnapshotScalarFieldEnum[]
  }

  /**
   * AdPerformanceSnapshot findMany
   */
  export type AdPerformanceSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceSnapshots to fetch.
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceSnapshots to fetch.
     */
    orderBy?: AdPerformanceSnapshotOrderByWithRelationInput | AdPerformanceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdPerformanceSnapshots.
     */
    cursor?: AdPerformanceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceSnapshots.
     */
    skip?: number
    distinct?: AdPerformanceSnapshotScalarFieldEnum | AdPerformanceSnapshotScalarFieldEnum[]
  }

  /**
   * AdPerformanceSnapshot create
   */
  export type AdPerformanceSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a AdPerformanceSnapshot.
     */
    data: XOR<AdPerformanceSnapshotCreateInput, AdPerformanceSnapshotUncheckedCreateInput>
  }

  /**
   * AdPerformanceSnapshot createMany
   */
  export type AdPerformanceSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdPerformanceSnapshots.
     */
    data: AdPerformanceSnapshotCreateManyInput | AdPerformanceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdPerformanceSnapshot createManyAndReturn
   */
  export type AdPerformanceSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many AdPerformanceSnapshots.
     */
    data: AdPerformanceSnapshotCreateManyInput | AdPerformanceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdPerformanceSnapshot update
   */
  export type AdPerformanceSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a AdPerformanceSnapshot.
     */
    data: XOR<AdPerformanceSnapshotUpdateInput, AdPerformanceSnapshotUncheckedUpdateInput>
    /**
     * Choose, which AdPerformanceSnapshot to update.
     */
    where: AdPerformanceSnapshotWhereUniqueInput
  }

  /**
   * AdPerformanceSnapshot updateMany
   */
  export type AdPerformanceSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdPerformanceSnapshots.
     */
    data: XOR<AdPerformanceSnapshotUpdateManyMutationInput, AdPerformanceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which AdPerformanceSnapshots to update
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * Limit how many AdPerformanceSnapshots to update.
     */
    limit?: number
  }

  /**
   * AdPerformanceSnapshot updateManyAndReturn
   */
  export type AdPerformanceSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update AdPerformanceSnapshots.
     */
    data: XOR<AdPerformanceSnapshotUpdateManyMutationInput, AdPerformanceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which AdPerformanceSnapshots to update
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * Limit how many AdPerformanceSnapshots to update.
     */
    limit?: number
  }

  /**
   * AdPerformanceSnapshot upsert
   */
  export type AdPerformanceSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the AdPerformanceSnapshot to update in case it exists.
     */
    where: AdPerformanceSnapshotWhereUniqueInput
    /**
     * In case the AdPerformanceSnapshot found by the `where` argument doesn't exist, create a new AdPerformanceSnapshot with this data.
     */
    create: XOR<AdPerformanceSnapshotCreateInput, AdPerformanceSnapshotUncheckedCreateInput>
    /**
     * In case the AdPerformanceSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdPerformanceSnapshotUpdateInput, AdPerformanceSnapshotUncheckedUpdateInput>
  }

  /**
   * AdPerformanceSnapshot delete
   */
  export type AdPerformanceSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
    /**
     * Filter which AdPerformanceSnapshot to delete.
     */
    where: AdPerformanceSnapshotWhereUniqueInput
  }

  /**
   * AdPerformanceSnapshot deleteMany
   */
  export type AdPerformanceSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPerformanceSnapshots to delete
     */
    where?: AdPerformanceSnapshotWhereInput
    /**
     * Limit how many AdPerformanceSnapshots to delete.
     */
    limit?: number
  }

  /**
   * AdPerformanceSnapshot.ads
   */
  export type AdPerformanceSnapshot$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    where?: AdPerformanceDataWhereInput
    orderBy?: AdPerformanceDataOrderByWithRelationInput | AdPerformanceDataOrderByWithRelationInput[]
    cursor?: AdPerformanceDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdPerformanceDataScalarFieldEnum | AdPerformanceDataScalarFieldEnum[]
  }

  /**
   * AdPerformanceSnapshot without action
   */
  export type AdPerformanceSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceSnapshot
     */
    select?: AdPerformanceSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceSnapshot
     */
    omit?: AdPerformanceSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model AdPerformanceData
   */

  export type AggregateAdPerformanceData = {
    _count: AdPerformanceDataCountAggregateOutputType | null
    _avg: AdPerformanceDataAvgAggregateOutputType | null
    _sum: AdPerformanceDataSumAggregateOutputType | null
    _min: AdPerformanceDataMinAggregateOutputType | null
    _max: AdPerformanceDataMaxAggregateOutputType | null
  }

  export type AdPerformanceDataAvgAggregateOutputType = {
    impressions: number | null
    ctr: number | null
    performanceScore: number | null
  }

  export type AdPerformanceDataSumAggregateOutputType = {
    impressions: number | null
    ctr: number | null
    performanceScore: number | null
  }

  export type AdPerformanceDataMinAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    facebookAdId: string | null
    adName: string | null
    impressions: number | null
    ctr: number | null
    engagementRateRanking: string | null
    performanceScore: number | null
    performanceCategory: string | null
    impressionsVsAverage: string | null
    ctrVsAverage: string | null
    engagementRanking: string | null
    previewUrl: string | null
    adCreatedTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdPerformanceDataMaxAggregateOutputType = {
    id: string | null
    snapshotId: string | null
    facebookAdId: string | null
    adName: string | null
    impressions: number | null
    ctr: number | null
    engagementRateRanking: string | null
    performanceScore: number | null
    performanceCategory: string | null
    impressionsVsAverage: string | null
    ctrVsAverage: string | null
    engagementRanking: string | null
    previewUrl: string | null
    adCreatedTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdPerformanceDataCountAggregateOutputType = {
    id: number
    snapshotId: number
    facebookAdId: number
    adName: number
    impressions: number
    ctr: number
    engagementRateRanking: number
    performanceScore: number
    performanceCategory: number
    impressionsVsAverage: number
    ctrVsAverage: number
    engagementRanking: number
    reasons: number
    previewUrl: number
    adCreatedTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdPerformanceDataAvgAggregateInputType = {
    impressions?: true
    ctr?: true
    performanceScore?: true
  }

  export type AdPerformanceDataSumAggregateInputType = {
    impressions?: true
    ctr?: true
    performanceScore?: true
  }

  export type AdPerformanceDataMinAggregateInputType = {
    id?: true
    snapshotId?: true
    facebookAdId?: true
    adName?: true
    impressions?: true
    ctr?: true
    engagementRateRanking?: true
    performanceScore?: true
    performanceCategory?: true
    impressionsVsAverage?: true
    ctrVsAverage?: true
    engagementRanking?: true
    previewUrl?: true
    adCreatedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdPerformanceDataMaxAggregateInputType = {
    id?: true
    snapshotId?: true
    facebookAdId?: true
    adName?: true
    impressions?: true
    ctr?: true
    engagementRateRanking?: true
    performanceScore?: true
    performanceCategory?: true
    impressionsVsAverage?: true
    ctrVsAverage?: true
    engagementRanking?: true
    previewUrl?: true
    adCreatedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdPerformanceDataCountAggregateInputType = {
    id?: true
    snapshotId?: true
    facebookAdId?: true
    adName?: true
    impressions?: true
    ctr?: true
    engagementRateRanking?: true
    performanceScore?: true
    performanceCategory?: true
    impressionsVsAverage?: true
    ctrVsAverage?: true
    engagementRanking?: true
    reasons?: true
    previewUrl?: true
    adCreatedTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdPerformanceDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPerformanceData to aggregate.
     */
    where?: AdPerformanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceData to fetch.
     */
    orderBy?: AdPerformanceDataOrderByWithRelationInput | AdPerformanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdPerformanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdPerformanceData
    **/
    _count?: true | AdPerformanceDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdPerformanceDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdPerformanceDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdPerformanceDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdPerformanceDataMaxAggregateInputType
  }

  export type GetAdPerformanceDataAggregateType<T extends AdPerformanceDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAdPerformanceData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdPerformanceData[P]>
      : GetScalarType<T[P], AggregateAdPerformanceData[P]>
  }




  export type AdPerformanceDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdPerformanceDataWhereInput
    orderBy?: AdPerformanceDataOrderByWithAggregationInput | AdPerformanceDataOrderByWithAggregationInput[]
    by: AdPerformanceDataScalarFieldEnum[] | AdPerformanceDataScalarFieldEnum
    having?: AdPerformanceDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdPerformanceDataCountAggregateInputType | true
    _avg?: AdPerformanceDataAvgAggregateInputType
    _sum?: AdPerformanceDataSumAggregateInputType
    _min?: AdPerformanceDataMinAggregateInputType
    _max?: AdPerformanceDataMaxAggregateInputType
  }

  export type AdPerformanceDataGroupByOutputType = {
    id: string
    snapshotId: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons: string[]
    previewUrl: string | null
    adCreatedTime: Date
    createdAt: Date
    updatedAt: Date
    _count: AdPerformanceDataCountAggregateOutputType | null
    _avg: AdPerformanceDataAvgAggregateOutputType | null
    _sum: AdPerformanceDataSumAggregateOutputType | null
    _min: AdPerformanceDataMinAggregateOutputType | null
    _max: AdPerformanceDataMaxAggregateOutputType | null
  }

  type GetAdPerformanceDataGroupByPayload<T extends AdPerformanceDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdPerformanceDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdPerformanceDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdPerformanceDataGroupByOutputType[P]>
            : GetScalarType<T[P], AdPerformanceDataGroupByOutputType[P]>
        }
      >
    >


  export type AdPerformanceDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    facebookAdId?: boolean
    adName?: boolean
    impressions?: boolean
    ctr?: boolean
    engagementRateRanking?: boolean
    performanceScore?: boolean
    performanceCategory?: boolean
    impressionsVsAverage?: boolean
    ctrVsAverage?: boolean
    engagementRanking?: boolean
    reasons?: boolean
    previewUrl?: boolean
    adCreatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPerformanceData"]>

  export type AdPerformanceDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    facebookAdId?: boolean
    adName?: boolean
    impressions?: boolean
    ctr?: boolean
    engagementRateRanking?: boolean
    performanceScore?: boolean
    performanceCategory?: boolean
    impressionsVsAverage?: boolean
    ctrVsAverage?: boolean
    engagementRanking?: boolean
    reasons?: boolean
    previewUrl?: boolean
    adCreatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPerformanceData"]>

  export type AdPerformanceDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snapshotId?: boolean
    facebookAdId?: boolean
    adName?: boolean
    impressions?: boolean
    ctr?: boolean
    engagementRateRanking?: boolean
    performanceScore?: boolean
    performanceCategory?: boolean
    impressionsVsAverage?: boolean
    ctrVsAverage?: boolean
    engagementRanking?: boolean
    reasons?: boolean
    previewUrl?: boolean
    adCreatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPerformanceData"]>

  export type AdPerformanceDataSelectScalar = {
    id?: boolean
    snapshotId?: boolean
    facebookAdId?: boolean
    adName?: boolean
    impressions?: boolean
    ctr?: boolean
    engagementRateRanking?: boolean
    performanceScore?: boolean
    performanceCategory?: boolean
    impressionsVsAverage?: boolean
    ctrVsAverage?: boolean
    engagementRanking?: boolean
    reasons?: boolean
    previewUrl?: boolean
    adCreatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdPerformanceDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "snapshotId" | "facebookAdId" | "adName" | "impressions" | "ctr" | "engagementRateRanking" | "performanceScore" | "performanceCategory" | "impressionsVsAverage" | "ctrVsAverage" | "engagementRanking" | "reasons" | "previewUrl" | "adCreatedTime" | "createdAt" | "updatedAt", ExtArgs["result"]["adPerformanceData"]>
  export type AdPerformanceDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }
  export type AdPerformanceDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }
  export type AdPerformanceDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshot?: boolean | AdPerformanceSnapshotDefaultArgs<ExtArgs>
  }

  export type $AdPerformanceDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdPerformanceData"
    objects: {
      snapshot: Prisma.$AdPerformanceSnapshotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      snapshotId: string
      facebookAdId: string
      adName: string
      impressions: number
      ctr: number
      engagementRateRanking: string | null
      performanceScore: number
      performanceCategory: string
      impressionsVsAverage: string
      ctrVsAverage: string
      engagementRanking: string
      reasons: string[]
      previewUrl: string | null
      adCreatedTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adPerformanceData"]>
    composites: {}
  }

  type AdPerformanceDataGetPayload<S extends boolean | null | undefined | AdPerformanceDataDefaultArgs> = $Result.GetResult<Prisma.$AdPerformanceDataPayload, S>

  type AdPerformanceDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdPerformanceDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdPerformanceDataCountAggregateInputType | true
    }

  export interface AdPerformanceDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdPerformanceData'], meta: { name: 'AdPerformanceData' } }
    /**
     * Find zero or one AdPerformanceData that matches the filter.
     * @param {AdPerformanceDataFindUniqueArgs} args - Arguments to find a AdPerformanceData
     * @example
     * // Get one AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdPerformanceDataFindUniqueArgs>(args: SelectSubset<T, AdPerformanceDataFindUniqueArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdPerformanceData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdPerformanceDataFindUniqueOrThrowArgs} args - Arguments to find a AdPerformanceData
     * @example
     * // Get one AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdPerformanceDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AdPerformanceDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdPerformanceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataFindFirstArgs} args - Arguments to find a AdPerformanceData
     * @example
     * // Get one AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdPerformanceDataFindFirstArgs>(args?: SelectSubset<T, AdPerformanceDataFindFirstArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdPerformanceData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataFindFirstOrThrowArgs} args - Arguments to find a AdPerformanceData
     * @example
     * // Get one AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdPerformanceDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AdPerformanceDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdPerformanceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findMany()
     * 
     * // Get first 10 AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adPerformanceDataWithIdOnly = await prisma.adPerformanceData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdPerformanceDataFindManyArgs>(args?: SelectSubset<T, AdPerformanceDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdPerformanceData.
     * @param {AdPerformanceDataCreateArgs} args - Arguments to create a AdPerformanceData.
     * @example
     * // Create one AdPerformanceData
     * const AdPerformanceData = await prisma.adPerformanceData.create({
     *   data: {
     *     // ... data to create a AdPerformanceData
     *   }
     * })
     * 
     */
    create<T extends AdPerformanceDataCreateArgs>(args: SelectSubset<T, AdPerformanceDataCreateArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdPerformanceData.
     * @param {AdPerformanceDataCreateManyArgs} args - Arguments to create many AdPerformanceData.
     * @example
     * // Create many AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdPerformanceDataCreateManyArgs>(args?: SelectSubset<T, AdPerformanceDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdPerformanceData and returns the data saved in the database.
     * @param {AdPerformanceDataCreateManyAndReturnArgs} args - Arguments to create many AdPerformanceData.
     * @example
     * // Create many AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdPerformanceData and only return the `id`
     * const adPerformanceDataWithIdOnly = await prisma.adPerformanceData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdPerformanceDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AdPerformanceDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdPerformanceData.
     * @param {AdPerformanceDataDeleteArgs} args - Arguments to delete one AdPerformanceData.
     * @example
     * // Delete one AdPerformanceData
     * const AdPerformanceData = await prisma.adPerformanceData.delete({
     *   where: {
     *     // ... filter to delete one AdPerformanceData
     *   }
     * })
     * 
     */
    delete<T extends AdPerformanceDataDeleteArgs>(args: SelectSubset<T, AdPerformanceDataDeleteArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdPerformanceData.
     * @param {AdPerformanceDataUpdateArgs} args - Arguments to update one AdPerformanceData.
     * @example
     * // Update one AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdPerformanceDataUpdateArgs>(args: SelectSubset<T, AdPerformanceDataUpdateArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdPerformanceData.
     * @param {AdPerformanceDataDeleteManyArgs} args - Arguments to filter AdPerformanceData to delete.
     * @example
     * // Delete a few AdPerformanceData
     * const { count } = await prisma.adPerformanceData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdPerformanceDataDeleteManyArgs>(args?: SelectSubset<T, AdPerformanceDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdPerformanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdPerformanceDataUpdateManyArgs>(args: SelectSubset<T, AdPerformanceDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdPerformanceData and returns the data updated in the database.
     * @param {AdPerformanceDataUpdateManyAndReturnArgs} args - Arguments to update many AdPerformanceData.
     * @example
     * // Update many AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdPerformanceData and only return the `id`
     * const adPerformanceDataWithIdOnly = await prisma.adPerformanceData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdPerformanceDataUpdateManyAndReturnArgs>(args: SelectSubset<T, AdPerformanceDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdPerformanceData.
     * @param {AdPerformanceDataUpsertArgs} args - Arguments to update or create a AdPerformanceData.
     * @example
     * // Update or create a AdPerformanceData
     * const adPerformanceData = await prisma.adPerformanceData.upsert({
     *   create: {
     *     // ... data to create a AdPerformanceData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdPerformanceData we want to update
     *   }
     * })
     */
    upsert<T extends AdPerformanceDataUpsertArgs>(args: SelectSubset<T, AdPerformanceDataUpsertArgs<ExtArgs>>): Prisma__AdPerformanceDataClient<$Result.GetResult<Prisma.$AdPerformanceDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdPerformanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataCountArgs} args - Arguments to filter AdPerformanceData to count.
     * @example
     * // Count the number of AdPerformanceData
     * const count = await prisma.adPerformanceData.count({
     *   where: {
     *     // ... the filter for the AdPerformanceData we want to count
     *   }
     * })
    **/
    count<T extends AdPerformanceDataCountArgs>(
      args?: Subset<T, AdPerformanceDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdPerformanceDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdPerformanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdPerformanceDataAggregateArgs>(args: Subset<T, AdPerformanceDataAggregateArgs>): Prisma.PrismaPromise<GetAdPerformanceDataAggregateType<T>>

    /**
     * Group by AdPerformanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPerformanceDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdPerformanceDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdPerformanceDataGroupByArgs['orderBy'] }
        : { orderBy?: AdPerformanceDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdPerformanceDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdPerformanceDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdPerformanceData model
   */
  readonly fields: AdPerformanceDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdPerformanceData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdPerformanceDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshot<T extends AdPerformanceSnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdPerformanceSnapshotDefaultArgs<ExtArgs>>): Prisma__AdPerformanceSnapshotClient<$Result.GetResult<Prisma.$AdPerformanceSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdPerformanceData model
   */
  interface AdPerformanceDataFieldRefs {
    readonly id: FieldRef<"AdPerformanceData", 'String'>
    readonly snapshotId: FieldRef<"AdPerformanceData", 'String'>
    readonly facebookAdId: FieldRef<"AdPerformanceData", 'String'>
    readonly adName: FieldRef<"AdPerformanceData", 'String'>
    readonly impressions: FieldRef<"AdPerformanceData", 'Int'>
    readonly ctr: FieldRef<"AdPerformanceData", 'Float'>
    readonly engagementRateRanking: FieldRef<"AdPerformanceData", 'String'>
    readonly performanceScore: FieldRef<"AdPerformanceData", 'Int'>
    readonly performanceCategory: FieldRef<"AdPerformanceData", 'String'>
    readonly impressionsVsAverage: FieldRef<"AdPerformanceData", 'String'>
    readonly ctrVsAverage: FieldRef<"AdPerformanceData", 'String'>
    readonly engagementRanking: FieldRef<"AdPerformanceData", 'String'>
    readonly reasons: FieldRef<"AdPerformanceData", 'String[]'>
    readonly previewUrl: FieldRef<"AdPerformanceData", 'String'>
    readonly adCreatedTime: FieldRef<"AdPerformanceData", 'DateTime'>
    readonly createdAt: FieldRef<"AdPerformanceData", 'DateTime'>
    readonly updatedAt: FieldRef<"AdPerformanceData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdPerformanceData findUnique
   */
  export type AdPerformanceDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceData to fetch.
     */
    where: AdPerformanceDataWhereUniqueInput
  }

  /**
   * AdPerformanceData findUniqueOrThrow
   */
  export type AdPerformanceDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceData to fetch.
     */
    where: AdPerformanceDataWhereUniqueInput
  }

  /**
   * AdPerformanceData findFirst
   */
  export type AdPerformanceDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceData to fetch.
     */
    where?: AdPerformanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceData to fetch.
     */
    orderBy?: AdPerformanceDataOrderByWithRelationInput | AdPerformanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPerformanceData.
     */
    cursor?: AdPerformanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPerformanceData.
     */
    distinct?: AdPerformanceDataScalarFieldEnum | AdPerformanceDataScalarFieldEnum[]
  }

  /**
   * AdPerformanceData findFirstOrThrow
   */
  export type AdPerformanceDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceData to fetch.
     */
    where?: AdPerformanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceData to fetch.
     */
    orderBy?: AdPerformanceDataOrderByWithRelationInput | AdPerformanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPerformanceData.
     */
    cursor?: AdPerformanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPerformanceData.
     */
    distinct?: AdPerformanceDataScalarFieldEnum | AdPerformanceDataScalarFieldEnum[]
  }

  /**
   * AdPerformanceData findMany
   */
  export type AdPerformanceDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter, which AdPerformanceData to fetch.
     */
    where?: AdPerformanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPerformanceData to fetch.
     */
    orderBy?: AdPerformanceDataOrderByWithRelationInput | AdPerformanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdPerformanceData.
     */
    cursor?: AdPerformanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPerformanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPerformanceData.
     */
    skip?: number
    distinct?: AdPerformanceDataScalarFieldEnum | AdPerformanceDataScalarFieldEnum[]
  }

  /**
   * AdPerformanceData create
   */
  export type AdPerformanceDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * The data needed to create a AdPerformanceData.
     */
    data: XOR<AdPerformanceDataCreateInput, AdPerformanceDataUncheckedCreateInput>
  }

  /**
   * AdPerformanceData createMany
   */
  export type AdPerformanceDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdPerformanceData.
     */
    data: AdPerformanceDataCreateManyInput | AdPerformanceDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdPerformanceData createManyAndReturn
   */
  export type AdPerformanceDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * The data used to create many AdPerformanceData.
     */
    data: AdPerformanceDataCreateManyInput | AdPerformanceDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdPerformanceData update
   */
  export type AdPerformanceDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * The data needed to update a AdPerformanceData.
     */
    data: XOR<AdPerformanceDataUpdateInput, AdPerformanceDataUncheckedUpdateInput>
    /**
     * Choose, which AdPerformanceData to update.
     */
    where: AdPerformanceDataWhereUniqueInput
  }

  /**
   * AdPerformanceData updateMany
   */
  export type AdPerformanceDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdPerformanceData.
     */
    data: XOR<AdPerformanceDataUpdateManyMutationInput, AdPerformanceDataUncheckedUpdateManyInput>
    /**
     * Filter which AdPerformanceData to update
     */
    where?: AdPerformanceDataWhereInput
    /**
     * Limit how many AdPerformanceData to update.
     */
    limit?: number
  }

  /**
   * AdPerformanceData updateManyAndReturn
   */
  export type AdPerformanceDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * The data used to update AdPerformanceData.
     */
    data: XOR<AdPerformanceDataUpdateManyMutationInput, AdPerformanceDataUncheckedUpdateManyInput>
    /**
     * Filter which AdPerformanceData to update
     */
    where?: AdPerformanceDataWhereInput
    /**
     * Limit how many AdPerformanceData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdPerformanceData upsert
   */
  export type AdPerformanceDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * The filter to search for the AdPerformanceData to update in case it exists.
     */
    where: AdPerformanceDataWhereUniqueInput
    /**
     * In case the AdPerformanceData found by the `where` argument doesn't exist, create a new AdPerformanceData with this data.
     */
    create: XOR<AdPerformanceDataCreateInput, AdPerformanceDataUncheckedCreateInput>
    /**
     * In case the AdPerformanceData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdPerformanceDataUpdateInput, AdPerformanceDataUncheckedUpdateInput>
  }

  /**
   * AdPerformanceData delete
   */
  export type AdPerformanceDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
    /**
     * Filter which AdPerformanceData to delete.
     */
    where: AdPerformanceDataWhereUniqueInput
  }

  /**
   * AdPerformanceData deleteMany
   */
  export type AdPerformanceDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPerformanceData to delete
     */
    where?: AdPerformanceDataWhereInput
    /**
     * Limit how many AdPerformanceData to delete.
     */
    limit?: number
  }

  /**
   * AdPerformanceData without action
   */
  export type AdPerformanceDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPerformanceData
     */
    select?: AdPerformanceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdPerformanceData
     */
    omit?: AdPerformanceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPerformanceDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    role: 'role',
    isLoading: 'isLoading',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const LinkedAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountType: 'accountType',
    accessToken: 'accessToken',
    accountId: 'accountId',
    accountName: 'accountName',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkedAccountScalarFieldEnum = (typeof LinkedAccountScalarFieldEnum)[keyof typeof LinkedAccountScalarFieldEnum]


  export const AdAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    linkedAccountId: 'linkedAccountId',
    accountId: 'accountId',
    accountName: 'accountName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdAccountScalarFieldEnum = (typeof AdAccountScalarFieldEnum)[keyof typeof AdAccountScalarFieldEnum]


  export const AdPerformanceSnapshotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    facebookAdAccountId: 'facebookAdAccountId',
    totalAdsAnalyzed: 'totalAdsAnalyzed',
    averageImpressions: 'averageImpressions',
    averageCTR: 'averageCTR',
    totalSpend: 'totalSpend',
    totalImpressions: 'totalImpressions',
    totalClicks: 'totalClicks',
    overallCTR: 'overallCTR',
    activeCampaigns: 'activeCampaigns',
    activeAdSets: 'activeAdSets',
    activeAds: 'activeAds',
    totalAds: 'totalAds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdPerformanceSnapshotScalarFieldEnum = (typeof AdPerformanceSnapshotScalarFieldEnum)[keyof typeof AdPerformanceSnapshotScalarFieldEnum]


  export const AdPerformanceDataScalarFieldEnum: {
    id: 'id',
    snapshotId: 'snapshotId',
    facebookAdId: 'facebookAdId',
    adName: 'adName',
    impressions: 'impressions',
    ctr: 'ctr',
    engagementRateRanking: 'engagementRateRanking',
    performanceScore: 'performanceScore',
    performanceCategory: 'performanceCategory',
    impressionsVsAverage: 'impressionsVsAverage',
    ctrVsAverage: 'ctrVsAverage',
    engagementRanking: 'engagementRanking',
    reasons: 'reasons',
    previewUrl: 'previewUrl',
    adCreatedTime: 'adCreatedTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdPerformanceDataScalarFieldEnum = (typeof AdPerformanceDataScalarFieldEnum)[keyof typeof AdPerformanceDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    isLoading?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isLoading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    isLoading?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isLoading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    role?: StringWithAggregatesFilter<"Message"> | string
    isLoading?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type LinkedAccountWhereInput = {
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    id?: StringFilter<"LinkedAccount"> | string
    userId?: StringFilter<"LinkedAccount"> | string
    accountType?: StringFilter<"LinkedAccount"> | string
    accessToken?: StringFilter<"LinkedAccount"> | string
    accountId?: StringFilter<"LinkedAccount"> | string
    accountName?: StringFilter<"LinkedAccount"> | string
    expiresAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    adAccounts?: AdAccountListRelationFilter
  }

  export type LinkedAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountType?: SortOrder
    accessToken?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adAccounts?: AdAccountOrderByRelationAggregateInput
  }

  export type LinkedAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_accountId?: LinkedAccountUserIdAccountIdCompoundUniqueInput
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    userId?: StringFilter<"LinkedAccount"> | string
    accountType?: StringFilter<"LinkedAccount"> | string
    accessToken?: StringFilter<"LinkedAccount"> | string
    accountId?: StringFilter<"LinkedAccount"> | string
    accountName?: StringFilter<"LinkedAccount"> | string
    expiresAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    adAccounts?: AdAccountListRelationFilter
  }, "id" | "userId_accountId">

  export type LinkedAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountType?: SortOrder
    accessToken?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkedAccountCountOrderByAggregateInput
    _max?: LinkedAccountMaxOrderByAggregateInput
    _min?: LinkedAccountMinOrderByAggregateInput
  }

  export type LinkedAccountScalarWhereWithAggregatesInput = {
    AND?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    OR?: LinkedAccountScalarWhereWithAggregatesInput[]
    NOT?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedAccount"> | string
    userId?: StringWithAggregatesFilter<"LinkedAccount"> | string
    accountType?: StringWithAggregatesFilter<"LinkedAccount"> | string
    accessToken?: StringWithAggregatesFilter<"LinkedAccount"> | string
    accountId?: StringWithAggregatesFilter<"LinkedAccount"> | string
    accountName?: StringWithAggregatesFilter<"LinkedAccount"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
  }

  export type AdAccountWhereInput = {
    AND?: AdAccountWhereInput | AdAccountWhereInput[]
    OR?: AdAccountWhereInput[]
    NOT?: AdAccountWhereInput | AdAccountWhereInput[]
    id?: StringFilter<"AdAccount"> | string
    userId?: StringFilter<"AdAccount"> | string
    linkedAccountId?: StringFilter<"AdAccount"> | string
    accountId?: StringFilter<"AdAccount"> | string
    accountName?: StringFilter<"AdAccount"> | string
    createdAt?: DateTimeFilter<"AdAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdAccount"> | Date | string
    linkedAccount?: XOR<LinkedAccountScalarRelationFilter, LinkedAccountWhereInput>
  }

  export type AdAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedAccountId?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    linkedAccount?: LinkedAccountOrderByWithRelationInput
  }

  export type AdAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdAccountWhereInput | AdAccountWhereInput[]
    OR?: AdAccountWhereInput[]
    NOT?: AdAccountWhereInput | AdAccountWhereInput[]
    userId?: StringFilter<"AdAccount"> | string
    linkedAccountId?: StringFilter<"AdAccount"> | string
    accountId?: StringFilter<"AdAccount"> | string
    accountName?: StringFilter<"AdAccount"> | string
    createdAt?: DateTimeFilter<"AdAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdAccount"> | Date | string
    linkedAccount?: XOR<LinkedAccountScalarRelationFilter, LinkedAccountWhereInput>
  }, "id">

  export type AdAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedAccountId?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdAccountCountOrderByAggregateInput
    _max?: AdAccountMaxOrderByAggregateInput
    _min?: AdAccountMinOrderByAggregateInput
  }

  export type AdAccountScalarWhereWithAggregatesInput = {
    AND?: AdAccountScalarWhereWithAggregatesInput | AdAccountScalarWhereWithAggregatesInput[]
    OR?: AdAccountScalarWhereWithAggregatesInput[]
    NOT?: AdAccountScalarWhereWithAggregatesInput | AdAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdAccount"> | string
    userId?: StringWithAggregatesFilter<"AdAccount"> | string
    linkedAccountId?: StringWithAggregatesFilter<"AdAccount"> | string
    accountId?: StringWithAggregatesFilter<"AdAccount"> | string
    accountName?: StringWithAggregatesFilter<"AdAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdAccount"> | Date | string
  }

  export type AdPerformanceSnapshotWhereInput = {
    AND?: AdPerformanceSnapshotWhereInput | AdPerformanceSnapshotWhereInput[]
    OR?: AdPerformanceSnapshotWhereInput[]
    NOT?: AdPerformanceSnapshotWhereInput | AdPerformanceSnapshotWhereInput[]
    id?: StringFilter<"AdPerformanceSnapshot"> | string
    userId?: StringFilter<"AdPerformanceSnapshot"> | string
    facebookAdAccountId?: StringFilter<"AdPerformanceSnapshot"> | string
    totalAdsAnalyzed?: IntFilter<"AdPerformanceSnapshot"> | number
    averageImpressions?: FloatFilter<"AdPerformanceSnapshot"> | number
    averageCTR?: FloatFilter<"AdPerformanceSnapshot"> | number
    totalSpend?: FloatFilter<"AdPerformanceSnapshot"> | number
    totalImpressions?: IntFilter<"AdPerformanceSnapshot"> | number
    totalClicks?: IntFilter<"AdPerformanceSnapshot"> | number
    overallCTR?: FloatFilter<"AdPerformanceSnapshot"> | number
    activeCampaigns?: IntFilter<"AdPerformanceSnapshot"> | number
    activeAdSets?: IntFilter<"AdPerformanceSnapshot"> | number
    activeAds?: IntFilter<"AdPerformanceSnapshot"> | number
    totalAds?: IntFilter<"AdPerformanceSnapshot"> | number
    createdAt?: DateTimeFilter<"AdPerformanceSnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"AdPerformanceSnapshot"> | Date | string
    ads?: AdPerformanceDataListRelationFilter
  }

  export type AdPerformanceSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    facebookAdAccountId?: SortOrder
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ads?: AdPerformanceDataOrderByRelationAggregateInput
  }

  export type AdPerformanceSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdPerformanceSnapshotWhereInput | AdPerformanceSnapshotWhereInput[]
    OR?: AdPerformanceSnapshotWhereInput[]
    NOT?: AdPerformanceSnapshotWhereInput | AdPerformanceSnapshotWhereInput[]
    userId?: StringFilter<"AdPerformanceSnapshot"> | string
    facebookAdAccountId?: StringFilter<"AdPerformanceSnapshot"> | string
    totalAdsAnalyzed?: IntFilter<"AdPerformanceSnapshot"> | number
    averageImpressions?: FloatFilter<"AdPerformanceSnapshot"> | number
    averageCTR?: FloatFilter<"AdPerformanceSnapshot"> | number
    totalSpend?: FloatFilter<"AdPerformanceSnapshot"> | number
    totalImpressions?: IntFilter<"AdPerformanceSnapshot"> | number
    totalClicks?: IntFilter<"AdPerformanceSnapshot"> | number
    overallCTR?: FloatFilter<"AdPerformanceSnapshot"> | number
    activeCampaigns?: IntFilter<"AdPerformanceSnapshot"> | number
    activeAdSets?: IntFilter<"AdPerformanceSnapshot"> | number
    activeAds?: IntFilter<"AdPerformanceSnapshot"> | number
    totalAds?: IntFilter<"AdPerformanceSnapshot"> | number
    createdAt?: DateTimeFilter<"AdPerformanceSnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"AdPerformanceSnapshot"> | Date | string
    ads?: AdPerformanceDataListRelationFilter
  }, "id">

  export type AdPerformanceSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    facebookAdAccountId?: SortOrder
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdPerformanceSnapshotCountOrderByAggregateInput
    _avg?: AdPerformanceSnapshotAvgOrderByAggregateInput
    _max?: AdPerformanceSnapshotMaxOrderByAggregateInput
    _min?: AdPerformanceSnapshotMinOrderByAggregateInput
    _sum?: AdPerformanceSnapshotSumOrderByAggregateInput
  }

  export type AdPerformanceSnapshotScalarWhereWithAggregatesInput = {
    AND?: AdPerformanceSnapshotScalarWhereWithAggregatesInput | AdPerformanceSnapshotScalarWhereWithAggregatesInput[]
    OR?: AdPerformanceSnapshotScalarWhereWithAggregatesInput[]
    NOT?: AdPerformanceSnapshotScalarWhereWithAggregatesInput | AdPerformanceSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdPerformanceSnapshot"> | string
    userId?: StringWithAggregatesFilter<"AdPerformanceSnapshot"> | string
    facebookAdAccountId?: StringWithAggregatesFilter<"AdPerformanceSnapshot"> | string
    totalAdsAnalyzed?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    averageImpressions?: FloatWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    averageCTR?: FloatWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    totalSpend?: FloatWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    totalImpressions?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    totalClicks?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    overallCTR?: FloatWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    activeCampaigns?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    activeAdSets?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    activeAds?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    totalAds?: IntWithAggregatesFilter<"AdPerformanceSnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AdPerformanceSnapshot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdPerformanceSnapshot"> | Date | string
  }

  export type AdPerformanceDataWhereInput = {
    AND?: AdPerformanceDataWhereInput | AdPerformanceDataWhereInput[]
    OR?: AdPerformanceDataWhereInput[]
    NOT?: AdPerformanceDataWhereInput | AdPerformanceDataWhereInput[]
    id?: StringFilter<"AdPerformanceData"> | string
    snapshotId?: StringFilter<"AdPerformanceData"> | string
    facebookAdId?: StringFilter<"AdPerformanceData"> | string
    adName?: StringFilter<"AdPerformanceData"> | string
    impressions?: IntFilter<"AdPerformanceData"> | number
    ctr?: FloatFilter<"AdPerformanceData"> | number
    engagementRateRanking?: StringNullableFilter<"AdPerformanceData"> | string | null
    performanceScore?: IntFilter<"AdPerformanceData"> | number
    performanceCategory?: StringFilter<"AdPerformanceData"> | string
    impressionsVsAverage?: StringFilter<"AdPerformanceData"> | string
    ctrVsAverage?: StringFilter<"AdPerformanceData"> | string
    engagementRanking?: StringFilter<"AdPerformanceData"> | string
    reasons?: StringNullableListFilter<"AdPerformanceData">
    previewUrl?: StringNullableFilter<"AdPerformanceData"> | string | null
    adCreatedTime?: DateTimeFilter<"AdPerformanceData"> | Date | string
    createdAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
    updatedAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
    snapshot?: XOR<AdPerformanceSnapshotScalarRelationFilter, AdPerformanceSnapshotWhereInput>
  }

  export type AdPerformanceDataOrderByWithRelationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    facebookAdId?: SortOrder
    adName?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    engagementRateRanking?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    performanceCategory?: SortOrder
    impressionsVsAverage?: SortOrder
    ctrVsAverage?: SortOrder
    engagementRanking?: SortOrder
    reasons?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    adCreatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshot?: AdPerformanceSnapshotOrderByWithRelationInput
  }

  export type AdPerformanceDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdPerformanceDataWhereInput | AdPerformanceDataWhereInput[]
    OR?: AdPerformanceDataWhereInput[]
    NOT?: AdPerformanceDataWhereInput | AdPerformanceDataWhereInput[]
    snapshotId?: StringFilter<"AdPerformanceData"> | string
    facebookAdId?: StringFilter<"AdPerformanceData"> | string
    adName?: StringFilter<"AdPerformanceData"> | string
    impressions?: IntFilter<"AdPerformanceData"> | number
    ctr?: FloatFilter<"AdPerformanceData"> | number
    engagementRateRanking?: StringNullableFilter<"AdPerformanceData"> | string | null
    performanceScore?: IntFilter<"AdPerformanceData"> | number
    performanceCategory?: StringFilter<"AdPerformanceData"> | string
    impressionsVsAverage?: StringFilter<"AdPerformanceData"> | string
    ctrVsAverage?: StringFilter<"AdPerformanceData"> | string
    engagementRanking?: StringFilter<"AdPerformanceData"> | string
    reasons?: StringNullableListFilter<"AdPerformanceData">
    previewUrl?: StringNullableFilter<"AdPerformanceData"> | string | null
    adCreatedTime?: DateTimeFilter<"AdPerformanceData"> | Date | string
    createdAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
    updatedAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
    snapshot?: XOR<AdPerformanceSnapshotScalarRelationFilter, AdPerformanceSnapshotWhereInput>
  }, "id">

  export type AdPerformanceDataOrderByWithAggregationInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    facebookAdId?: SortOrder
    adName?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    engagementRateRanking?: SortOrderInput | SortOrder
    performanceScore?: SortOrder
    performanceCategory?: SortOrder
    impressionsVsAverage?: SortOrder
    ctrVsAverage?: SortOrder
    engagementRanking?: SortOrder
    reasons?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    adCreatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdPerformanceDataCountOrderByAggregateInput
    _avg?: AdPerformanceDataAvgOrderByAggregateInput
    _max?: AdPerformanceDataMaxOrderByAggregateInput
    _min?: AdPerformanceDataMinOrderByAggregateInput
    _sum?: AdPerformanceDataSumOrderByAggregateInput
  }

  export type AdPerformanceDataScalarWhereWithAggregatesInput = {
    AND?: AdPerformanceDataScalarWhereWithAggregatesInput | AdPerformanceDataScalarWhereWithAggregatesInput[]
    OR?: AdPerformanceDataScalarWhereWithAggregatesInput[]
    NOT?: AdPerformanceDataScalarWhereWithAggregatesInput | AdPerformanceDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    snapshotId?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    facebookAdId?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    adName?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    impressions?: IntWithAggregatesFilter<"AdPerformanceData"> | number
    ctr?: FloatWithAggregatesFilter<"AdPerformanceData"> | number
    engagementRateRanking?: StringNullableWithAggregatesFilter<"AdPerformanceData"> | string | null
    performanceScore?: IntWithAggregatesFilter<"AdPerformanceData"> | number
    performanceCategory?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    impressionsVsAverage?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    ctrVsAverage?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    engagementRanking?: StringWithAggregatesFilter<"AdPerformanceData"> | string
    reasons?: StringNullableListFilter<"AdPerformanceData">
    previewUrl?: StringNullableWithAggregatesFilter<"AdPerformanceData"> | string | null
    adCreatedTime?: DateTimeWithAggregatesFilter<"AdPerformanceData"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AdPerformanceData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdPerformanceData"> | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    userId: string
    role?: string
    isLoading?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    role?: string
    isLoading?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isLoading?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isLoading?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    userId: string
    role?: string
    isLoading?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isLoading?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isLoading?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountCreateInput = {
    id?: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAccounts?: AdAccountCreateNestedManyWithoutLinkedAccountInput
  }

  export type LinkedAccountUncheckedCreateInput = {
    id?: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAccounts?: AdAccountUncheckedCreateNestedManyWithoutLinkedAccountInput
  }

  export type LinkedAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAccounts?: AdAccountUpdateManyWithoutLinkedAccountNestedInput
  }

  export type LinkedAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAccounts?: AdAccountUncheckedUpdateManyWithoutLinkedAccountNestedInput
  }

  export type LinkedAccountCreateManyInput = {
    id?: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountCreateInput = {
    id?: string
    userId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedAccount: LinkedAccountCreateNestedOneWithoutAdAccountsInput
  }

  export type AdAccountUncheckedCreateInput = {
    id?: string
    userId: string
    linkedAccountId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedAccount?: LinkedAccountUpdateOneRequiredWithoutAdAccountsNestedInput
  }

  export type AdAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedAccountId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountCreateManyInput = {
    id?: string
    userId: string
    linkedAccountId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedAccountId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceSnapshotCreateInput = {
    id?: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend?: number
    totalImpressions?: number
    totalClicks?: number
    overallCTR?: number
    activeCampaigns?: number
    activeAdSets?: number
    activeAds?: number
    totalAds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdPerformanceDataCreateNestedManyWithoutSnapshotInput
  }

  export type AdPerformanceSnapshotUncheckedCreateInput = {
    id?: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend?: number
    totalImpressions?: number
    totalClicks?: number
    overallCTR?: number
    activeCampaigns?: number
    activeAdSets?: number
    activeAds?: number
    totalAds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdPerformanceDataUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type AdPerformanceSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdPerformanceDataUpdateManyWithoutSnapshotNestedInput
  }

  export type AdPerformanceSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdPerformanceDataUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type AdPerformanceSnapshotCreateManyInput = {
    id?: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend?: number
    totalImpressions?: number
    totalClicks?: number
    overallCTR?: number
    activeCampaigns?: number
    activeAdSets?: number
    activeAds?: number
    totalAds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataCreateInput = {
    id?: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshot: AdPerformanceSnapshotCreateNestedOneWithoutAdsInput
  }

  export type AdPerformanceDataUncheckedCreateInput = {
    id?: string
    snapshotId: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: AdPerformanceSnapshotUpdateOneRequiredWithoutAdsNestedInput
  }

  export type AdPerformanceDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataCreateManyInput = {
    id?: string
    snapshotId: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isLoading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isLoading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isLoading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdAccountListRelationFilter = {
    every?: AdAccountWhereInput
    some?: AdAccountWhereInput
    none?: AdAccountWhereInput
  }

  export type AdAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkedAccountUserIdAccountIdCompoundUniqueInput = {
    userId: string
    accountId: string
  }

  export type LinkedAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountType?: SortOrder
    accessToken?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkedAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountType?: SortOrder
    accessToken?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkedAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountType?: SortOrder
    accessToken?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkedAccountScalarRelationFilter = {
    is?: LinkedAccountWhereInput
    isNot?: LinkedAccountWhereInput
  }

  export type AdAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedAccountId?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedAccountId?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    linkedAccountId?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AdPerformanceDataListRelationFilter = {
    every?: AdPerformanceDataWhereInput
    some?: AdPerformanceDataWhereInput
    none?: AdPerformanceDataWhereInput
  }

  export type AdPerformanceDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdPerformanceSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facebookAdAccountId?: SortOrder
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceSnapshotAvgOrderByAggregateInput = {
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
  }

  export type AdPerformanceSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facebookAdAccountId?: SortOrder
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facebookAdAccountId?: SortOrder
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceSnapshotSumOrderByAggregateInput = {
    totalAdsAnalyzed?: SortOrder
    averageImpressions?: SortOrder
    averageCTR?: SortOrder
    totalSpend?: SortOrder
    totalImpressions?: SortOrder
    totalClicks?: SortOrder
    overallCTR?: SortOrder
    activeCampaigns?: SortOrder
    activeAdSets?: SortOrder
    activeAds?: SortOrder
    totalAds?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AdPerformanceSnapshotScalarRelationFilter = {
    is?: AdPerformanceSnapshotWhereInput
    isNot?: AdPerformanceSnapshotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdPerformanceDataCountOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    facebookAdId?: SortOrder
    adName?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    engagementRateRanking?: SortOrder
    performanceScore?: SortOrder
    performanceCategory?: SortOrder
    impressionsVsAverage?: SortOrder
    ctrVsAverage?: SortOrder
    engagementRanking?: SortOrder
    reasons?: SortOrder
    previewUrl?: SortOrder
    adCreatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceDataAvgOrderByAggregateInput = {
    impressions?: SortOrder
    ctr?: SortOrder
    performanceScore?: SortOrder
  }

  export type AdPerformanceDataMaxOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    facebookAdId?: SortOrder
    adName?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    engagementRateRanking?: SortOrder
    performanceScore?: SortOrder
    performanceCategory?: SortOrder
    impressionsVsAverage?: SortOrder
    ctrVsAverage?: SortOrder
    engagementRanking?: SortOrder
    previewUrl?: SortOrder
    adCreatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceDataMinOrderByAggregateInput = {
    id?: SortOrder
    snapshotId?: SortOrder
    facebookAdId?: SortOrder
    adName?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    engagementRateRanking?: SortOrder
    performanceScore?: SortOrder
    performanceCategory?: SortOrder
    impressionsVsAverage?: SortOrder
    ctrVsAverage?: SortOrder
    engagementRanking?: SortOrder
    previewUrl?: SortOrder
    adCreatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdPerformanceDataSumOrderByAggregateInput = {
    impressions?: SortOrder
    ctr?: SortOrder
    performanceScore?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdAccountCreateNestedManyWithoutLinkedAccountInput = {
    create?: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput> | AdAccountCreateWithoutLinkedAccountInput[] | AdAccountUncheckedCreateWithoutLinkedAccountInput[]
    connectOrCreate?: AdAccountCreateOrConnectWithoutLinkedAccountInput | AdAccountCreateOrConnectWithoutLinkedAccountInput[]
    createMany?: AdAccountCreateManyLinkedAccountInputEnvelope
    connect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
  }

  export type AdAccountUncheckedCreateNestedManyWithoutLinkedAccountInput = {
    create?: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput> | AdAccountCreateWithoutLinkedAccountInput[] | AdAccountUncheckedCreateWithoutLinkedAccountInput[]
    connectOrCreate?: AdAccountCreateOrConnectWithoutLinkedAccountInput | AdAccountCreateOrConnectWithoutLinkedAccountInput[]
    createMany?: AdAccountCreateManyLinkedAccountInputEnvelope
    connect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
  }

  export type AdAccountUpdateManyWithoutLinkedAccountNestedInput = {
    create?: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput> | AdAccountCreateWithoutLinkedAccountInput[] | AdAccountUncheckedCreateWithoutLinkedAccountInput[]
    connectOrCreate?: AdAccountCreateOrConnectWithoutLinkedAccountInput | AdAccountCreateOrConnectWithoutLinkedAccountInput[]
    upsert?: AdAccountUpsertWithWhereUniqueWithoutLinkedAccountInput | AdAccountUpsertWithWhereUniqueWithoutLinkedAccountInput[]
    createMany?: AdAccountCreateManyLinkedAccountInputEnvelope
    set?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    disconnect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    delete?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    connect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    update?: AdAccountUpdateWithWhereUniqueWithoutLinkedAccountInput | AdAccountUpdateWithWhereUniqueWithoutLinkedAccountInput[]
    updateMany?: AdAccountUpdateManyWithWhereWithoutLinkedAccountInput | AdAccountUpdateManyWithWhereWithoutLinkedAccountInput[]
    deleteMany?: AdAccountScalarWhereInput | AdAccountScalarWhereInput[]
  }

  export type AdAccountUncheckedUpdateManyWithoutLinkedAccountNestedInput = {
    create?: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput> | AdAccountCreateWithoutLinkedAccountInput[] | AdAccountUncheckedCreateWithoutLinkedAccountInput[]
    connectOrCreate?: AdAccountCreateOrConnectWithoutLinkedAccountInput | AdAccountCreateOrConnectWithoutLinkedAccountInput[]
    upsert?: AdAccountUpsertWithWhereUniqueWithoutLinkedAccountInput | AdAccountUpsertWithWhereUniqueWithoutLinkedAccountInput[]
    createMany?: AdAccountCreateManyLinkedAccountInputEnvelope
    set?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    disconnect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    delete?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    connect?: AdAccountWhereUniqueInput | AdAccountWhereUniqueInput[]
    update?: AdAccountUpdateWithWhereUniqueWithoutLinkedAccountInput | AdAccountUpdateWithWhereUniqueWithoutLinkedAccountInput[]
    updateMany?: AdAccountUpdateManyWithWhereWithoutLinkedAccountInput | AdAccountUpdateManyWithWhereWithoutLinkedAccountInput[]
    deleteMany?: AdAccountScalarWhereInput | AdAccountScalarWhereInput[]
  }

  export type LinkedAccountCreateNestedOneWithoutAdAccountsInput = {
    create?: XOR<LinkedAccountCreateWithoutAdAccountsInput, LinkedAccountUncheckedCreateWithoutAdAccountsInput>
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutAdAccountsInput
    connect?: LinkedAccountWhereUniqueInput
  }

  export type LinkedAccountUpdateOneRequiredWithoutAdAccountsNestedInput = {
    create?: XOR<LinkedAccountCreateWithoutAdAccountsInput, LinkedAccountUncheckedCreateWithoutAdAccountsInput>
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutAdAccountsInput
    upsert?: LinkedAccountUpsertWithoutAdAccountsInput
    connect?: LinkedAccountWhereUniqueInput
    update?: XOR<XOR<LinkedAccountUpdateToOneWithWhereWithoutAdAccountsInput, LinkedAccountUpdateWithoutAdAccountsInput>, LinkedAccountUncheckedUpdateWithoutAdAccountsInput>
  }

  export type AdPerformanceDataCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput> | AdPerformanceDataCreateWithoutSnapshotInput[] | AdPerformanceDataUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AdPerformanceDataCreateOrConnectWithoutSnapshotInput | AdPerformanceDataCreateOrConnectWithoutSnapshotInput[]
    createMany?: AdPerformanceDataCreateManySnapshotInputEnvelope
    connect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
  }

  export type AdPerformanceDataUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput> | AdPerformanceDataCreateWithoutSnapshotInput[] | AdPerformanceDataUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AdPerformanceDataCreateOrConnectWithoutSnapshotInput | AdPerformanceDataCreateOrConnectWithoutSnapshotInput[]
    createMany?: AdPerformanceDataCreateManySnapshotInputEnvelope
    connect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdPerformanceDataUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput> | AdPerformanceDataCreateWithoutSnapshotInput[] | AdPerformanceDataUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AdPerformanceDataCreateOrConnectWithoutSnapshotInput | AdPerformanceDataCreateOrConnectWithoutSnapshotInput[]
    upsert?: AdPerformanceDataUpsertWithWhereUniqueWithoutSnapshotInput | AdPerformanceDataUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AdPerformanceDataCreateManySnapshotInputEnvelope
    set?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    disconnect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    delete?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    connect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    update?: AdPerformanceDataUpdateWithWhereUniqueWithoutSnapshotInput | AdPerformanceDataUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AdPerformanceDataUpdateManyWithWhereWithoutSnapshotInput | AdPerformanceDataUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AdPerformanceDataScalarWhereInput | AdPerformanceDataScalarWhereInput[]
  }

  export type AdPerformanceDataUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput> | AdPerformanceDataCreateWithoutSnapshotInput[] | AdPerformanceDataUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AdPerformanceDataCreateOrConnectWithoutSnapshotInput | AdPerformanceDataCreateOrConnectWithoutSnapshotInput[]
    upsert?: AdPerformanceDataUpsertWithWhereUniqueWithoutSnapshotInput | AdPerformanceDataUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AdPerformanceDataCreateManySnapshotInputEnvelope
    set?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    disconnect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    delete?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    connect?: AdPerformanceDataWhereUniqueInput | AdPerformanceDataWhereUniqueInput[]
    update?: AdPerformanceDataUpdateWithWhereUniqueWithoutSnapshotInput | AdPerformanceDataUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AdPerformanceDataUpdateManyWithWhereWithoutSnapshotInput | AdPerformanceDataUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AdPerformanceDataScalarWhereInput | AdPerformanceDataScalarWhereInput[]
  }

  export type AdPerformanceDataCreatereasonsInput = {
    set: string[]
  }

  export type AdPerformanceSnapshotCreateNestedOneWithoutAdsInput = {
    create?: XOR<AdPerformanceSnapshotCreateWithoutAdsInput, AdPerformanceSnapshotUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdPerformanceSnapshotCreateOrConnectWithoutAdsInput
    connect?: AdPerformanceSnapshotWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdPerformanceDataUpdatereasonsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdPerformanceSnapshotUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<AdPerformanceSnapshotCreateWithoutAdsInput, AdPerformanceSnapshotUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdPerformanceSnapshotCreateOrConnectWithoutAdsInput
    upsert?: AdPerformanceSnapshotUpsertWithoutAdsInput
    connect?: AdPerformanceSnapshotWhereUniqueInput
    update?: XOR<XOR<AdPerformanceSnapshotUpdateToOneWithWhereWithoutAdsInput, AdPerformanceSnapshotUpdateWithoutAdsInput>, AdPerformanceSnapshotUncheckedUpdateWithoutAdsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AdAccountCreateWithoutLinkedAccountInput = {
    id?: string
    userId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAccountUncheckedCreateWithoutLinkedAccountInput = {
    id?: string
    userId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAccountCreateOrConnectWithoutLinkedAccountInput = {
    where: AdAccountWhereUniqueInput
    create: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput>
  }

  export type AdAccountCreateManyLinkedAccountInputEnvelope = {
    data: AdAccountCreateManyLinkedAccountInput | AdAccountCreateManyLinkedAccountInput[]
    skipDuplicates?: boolean
  }

  export type AdAccountUpsertWithWhereUniqueWithoutLinkedAccountInput = {
    where: AdAccountWhereUniqueInput
    update: XOR<AdAccountUpdateWithoutLinkedAccountInput, AdAccountUncheckedUpdateWithoutLinkedAccountInput>
    create: XOR<AdAccountCreateWithoutLinkedAccountInput, AdAccountUncheckedCreateWithoutLinkedAccountInput>
  }

  export type AdAccountUpdateWithWhereUniqueWithoutLinkedAccountInput = {
    where: AdAccountWhereUniqueInput
    data: XOR<AdAccountUpdateWithoutLinkedAccountInput, AdAccountUncheckedUpdateWithoutLinkedAccountInput>
  }

  export type AdAccountUpdateManyWithWhereWithoutLinkedAccountInput = {
    where: AdAccountScalarWhereInput
    data: XOR<AdAccountUpdateManyMutationInput, AdAccountUncheckedUpdateManyWithoutLinkedAccountInput>
  }

  export type AdAccountScalarWhereInput = {
    AND?: AdAccountScalarWhereInput | AdAccountScalarWhereInput[]
    OR?: AdAccountScalarWhereInput[]
    NOT?: AdAccountScalarWhereInput | AdAccountScalarWhereInput[]
    id?: StringFilter<"AdAccount"> | string
    userId?: StringFilter<"AdAccount"> | string
    linkedAccountId?: StringFilter<"AdAccount"> | string
    accountId?: StringFilter<"AdAccount"> | string
    accountName?: StringFilter<"AdAccount"> | string
    createdAt?: DateTimeFilter<"AdAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdAccount"> | Date | string
  }

  export type LinkedAccountCreateWithoutAdAccountsInput = {
    id?: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountUncheckedCreateWithoutAdAccountsInput = {
    id?: string
    userId: string
    accountType: string
    accessToken: string
    accountId: string
    accountName: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountCreateOrConnectWithoutAdAccountsInput = {
    where: LinkedAccountWhereUniqueInput
    create: XOR<LinkedAccountCreateWithoutAdAccountsInput, LinkedAccountUncheckedCreateWithoutAdAccountsInput>
  }

  export type LinkedAccountUpsertWithoutAdAccountsInput = {
    update: XOR<LinkedAccountUpdateWithoutAdAccountsInput, LinkedAccountUncheckedUpdateWithoutAdAccountsInput>
    create: XOR<LinkedAccountCreateWithoutAdAccountsInput, LinkedAccountUncheckedCreateWithoutAdAccountsInput>
    where?: LinkedAccountWhereInput
  }

  export type LinkedAccountUpdateToOneWithWhereWithoutAdAccountsInput = {
    where?: LinkedAccountWhereInput
    data: XOR<LinkedAccountUpdateWithoutAdAccountsInput, LinkedAccountUncheckedUpdateWithoutAdAccountsInput>
  }

  export type LinkedAccountUpdateWithoutAdAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUncheckedUpdateWithoutAdAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataCreateWithoutSnapshotInput = {
    id?: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceDataUncheckedCreateWithoutSnapshotInput = {
    id?: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceDataCreateOrConnectWithoutSnapshotInput = {
    where: AdPerformanceDataWhereUniqueInput
    create: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput>
  }

  export type AdPerformanceDataCreateManySnapshotInputEnvelope = {
    data: AdPerformanceDataCreateManySnapshotInput | AdPerformanceDataCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type AdPerformanceDataUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: AdPerformanceDataWhereUniqueInput
    update: XOR<AdPerformanceDataUpdateWithoutSnapshotInput, AdPerformanceDataUncheckedUpdateWithoutSnapshotInput>
    create: XOR<AdPerformanceDataCreateWithoutSnapshotInput, AdPerformanceDataUncheckedCreateWithoutSnapshotInput>
  }

  export type AdPerformanceDataUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: AdPerformanceDataWhereUniqueInput
    data: XOR<AdPerformanceDataUpdateWithoutSnapshotInput, AdPerformanceDataUncheckedUpdateWithoutSnapshotInput>
  }

  export type AdPerformanceDataUpdateManyWithWhereWithoutSnapshotInput = {
    where: AdPerformanceDataScalarWhereInput
    data: XOR<AdPerformanceDataUpdateManyMutationInput, AdPerformanceDataUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type AdPerformanceDataScalarWhereInput = {
    AND?: AdPerformanceDataScalarWhereInput | AdPerformanceDataScalarWhereInput[]
    OR?: AdPerformanceDataScalarWhereInput[]
    NOT?: AdPerformanceDataScalarWhereInput | AdPerformanceDataScalarWhereInput[]
    id?: StringFilter<"AdPerformanceData"> | string
    snapshotId?: StringFilter<"AdPerformanceData"> | string
    facebookAdId?: StringFilter<"AdPerformanceData"> | string
    adName?: StringFilter<"AdPerformanceData"> | string
    impressions?: IntFilter<"AdPerformanceData"> | number
    ctr?: FloatFilter<"AdPerformanceData"> | number
    engagementRateRanking?: StringNullableFilter<"AdPerformanceData"> | string | null
    performanceScore?: IntFilter<"AdPerformanceData"> | number
    performanceCategory?: StringFilter<"AdPerformanceData"> | string
    impressionsVsAverage?: StringFilter<"AdPerformanceData"> | string
    ctrVsAverage?: StringFilter<"AdPerformanceData"> | string
    engagementRanking?: StringFilter<"AdPerformanceData"> | string
    reasons?: StringNullableListFilter<"AdPerformanceData">
    previewUrl?: StringNullableFilter<"AdPerformanceData"> | string | null
    adCreatedTime?: DateTimeFilter<"AdPerformanceData"> | Date | string
    createdAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
    updatedAt?: DateTimeFilter<"AdPerformanceData"> | Date | string
  }

  export type AdPerformanceSnapshotCreateWithoutAdsInput = {
    id?: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend?: number
    totalImpressions?: number
    totalClicks?: number
    overallCTR?: number
    activeCampaigns?: number
    activeAdSets?: number
    activeAds?: number
    totalAds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceSnapshotUncheckedCreateWithoutAdsInput = {
    id?: string
    userId: string
    facebookAdAccountId: string
    totalAdsAnalyzed: number
    averageImpressions: number
    averageCTR: number
    totalSpend?: number
    totalImpressions?: number
    totalClicks?: number
    overallCTR?: number
    activeCampaigns?: number
    activeAdSets?: number
    activeAds?: number
    totalAds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceSnapshotCreateOrConnectWithoutAdsInput = {
    where: AdPerformanceSnapshotWhereUniqueInput
    create: XOR<AdPerformanceSnapshotCreateWithoutAdsInput, AdPerformanceSnapshotUncheckedCreateWithoutAdsInput>
  }

  export type AdPerformanceSnapshotUpsertWithoutAdsInput = {
    update: XOR<AdPerformanceSnapshotUpdateWithoutAdsInput, AdPerformanceSnapshotUncheckedUpdateWithoutAdsInput>
    create: XOR<AdPerformanceSnapshotCreateWithoutAdsInput, AdPerformanceSnapshotUncheckedCreateWithoutAdsInput>
    where?: AdPerformanceSnapshotWhereInput
  }

  export type AdPerformanceSnapshotUpdateToOneWithWhereWithoutAdsInput = {
    where?: AdPerformanceSnapshotWhereInput
    data: XOR<AdPerformanceSnapshotUpdateWithoutAdsInput, AdPerformanceSnapshotUncheckedUpdateWithoutAdsInput>
  }

  export type AdPerformanceSnapshotUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceSnapshotUncheckedUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    facebookAdAccountId?: StringFieldUpdateOperationsInput | string
    totalAdsAnalyzed?: IntFieldUpdateOperationsInput | number
    averageImpressions?: FloatFieldUpdateOperationsInput | number
    averageCTR?: FloatFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    totalImpressions?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    overallCTR?: FloatFieldUpdateOperationsInput | number
    activeCampaigns?: IntFieldUpdateOperationsInput | number
    activeAdSets?: IntFieldUpdateOperationsInput | number
    activeAds?: IntFieldUpdateOperationsInput | number
    totalAds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountCreateManyLinkedAccountInput = {
    id?: string
    userId: string
    accountId: string
    accountName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAccountUpdateWithoutLinkedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountUncheckedUpdateWithoutLinkedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAccountUncheckedUpdateManyWithoutLinkedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataCreateManySnapshotInput = {
    id?: string
    facebookAdId: string
    adName: string
    impressions: number
    ctr: number
    engagementRateRanking?: string | null
    performanceScore: number
    performanceCategory: string
    impressionsVsAverage: string
    ctrVsAverage: string
    engagementRanking: string
    reasons?: AdPerformanceDataCreatereasonsInput | string[]
    previewUrl?: string | null
    adCreatedTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdPerformanceDataUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdPerformanceDataUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookAdId?: StringFieldUpdateOperationsInput | string
    adName?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    engagementRateRanking?: NullableStringFieldUpdateOperationsInput | string | null
    performanceScore?: IntFieldUpdateOperationsInput | number
    performanceCategory?: StringFieldUpdateOperationsInput | string
    impressionsVsAverage?: StringFieldUpdateOperationsInput | string
    ctrVsAverage?: StringFieldUpdateOperationsInput | string
    engagementRanking?: StringFieldUpdateOperationsInput | string
    reasons?: AdPerformanceDataUpdatereasonsInput | string[]
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adCreatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}