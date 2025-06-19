import { BreadcrumbsConsumer } from '@/consumers/breadcrumbsConsumer';
import { Breadcrumb } from '@/types/breadcrumbs';
import { UserService } from '@/services/user.service';
import { ServerPromptService } from '@/services/server/prompt.service';
import { PromptSettingsModal } from '@/components/settings/prompt-settings-wrapper';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Button } from '@repo/ui/components/button';

const breadCrumbs: Breadcrumb[] = [
  {
    label: 'Settings',
    link: '/settings',
  },
];

export default async function SettingsPage() {
  const userId = await UserService.requireAuth();
  const prompt = await ServerPromptService.getUserPrompt(userId);

  return (
    <div className="pb-6">
      <BreadcrumbsConsumer breadcrumbs={breadCrumbs} />

      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Pre-Prompt Management Modal */}
          <PromptSettingsModal initialPrompt={prompt} />

          {/* Linked Accounts Card */}
          <Card>
            <CardHeader>
              <CardTitle>Linked Accounts</CardTitle>
              <CardDescription>
                Manage your connected social media accounts for AI interactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/settings/linked-accounts">Manage Linked Accounts</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
