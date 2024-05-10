import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

import prisma from '../../../../prisma/client';

import { QuestionComplexityBadge, QuestionStatusBadge } from '@/components';

interface QuestionDetailPageProps {
  params: {
    id: string;
  };
}

const QuestionDetailPage = async ({ params }: QuestionDetailPageProps) => {
  const question = await prisma.question.findUnique({
    where: { id: Number(params.id) },
  });

  if (!question) notFound();

  return (
    <div>
      <Heading>{question.title}</Heading>
      <Flex
        gap="3"
        my="2"
      >
        <QuestionStatusBadge status={question.status} />
        <QuestionComplexityBadge complexity={question.complexity} />
        <Text>{question.createdAt.toLocaleDateString('ru-RU')}</Text>
      </Flex>
      <Card
        className="prose"
        mt="4"
      >
        <Markdown>{question.description}</Markdown>
      </Card>
    </div>
  );
};
export default QuestionDetailPage;
