import type { Question } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import Markdown from 'react-markdown';

import { QuestionComplexityBadge, QuestionStatusBadge } from '@/components';

const QuestionDetails = ({ question }: { question: Question }) => {
  return (
    <>
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
    </>
  );
};
export default QuestionDetails;
