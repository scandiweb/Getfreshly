import ChatContainer from '@/components/chat/ChatContainer';
import { BreadcrumbsConsumer } from '@/consumers/breadcrumbsConsumer';
import { Breadcrumb } from '@/types/breadcrumbs';
import { UserService } from '@/services/user.service';
import { redirect } from 'next/navigation';
import { prisma } from '@repo/database';
import { LinkedAccount } from '@/types/linkedAccounts';
import { ChatDrawer } from '@/components/chat/ChatDrawer';

interface PageProps {
  params: Promise<{
    chatId: string;
  }>;
}

export default async function Page({
  params,
}: {
  params: PageProps['params'];
}) {
  const resolvedParams = await params;
  const user = await UserService.getCurrentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const chat = await prisma.chat.findUnique({
    where: {
      id: resolvedParams.chatId,
    },
    select: {
      title: true,
      messages: {
        select: {
          content: true,
          role: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  });

  const messages =
    chat?.messages.map((msg) => ({
      content: msg.content,
      role: msg.role as 'user' | 'assistant',
    })) || [];

  const breadCrumbs: Breadcrumb[] = [
    {
      label: 'Chat',
      link: '/new',
    },
    {
      label: chat?.title || 'Untitled Chat',
      link: `/chat/${resolvedParams.chatId}`,
    },
  ];

  const linkedAccounts = (await prisma.linkedAccount.findMany({
    where: {
      userId: user.id,
    },
    select: {
      accountName: true,
      accessToken: true,
      adAccounts: {
        select: {
          accountId: true,
          accountName: true,
        },
      },
    },
  })) as LinkedAccount[];

  return (
    <div className="pb-6 h-[calc(100vh-161px)] relative">
      <BreadcrumbsConsumer breadcrumbs={breadCrumbs} />
      <div className="flex h-full">
        <div className="flex-1">
          <ChatContainer currentUser={user} linkedAccounts={linkedAccounts} />
        </div>
        <ChatDrawer messages={messages} chatId={resolvedParams.chatId} />
      </div>
    </div>
  );
}
