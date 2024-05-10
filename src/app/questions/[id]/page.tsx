import { Pencil2Icon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
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
    <Grid
      columns={{ initial: '1', md: '2' }}
      gap="5"
    >
      <Box>
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
      </Box>
      <Box>
        <Link href={`/questions/${question.id}/edit`}>
          <Button>
            <Pencil2Icon />
            Edit Question
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};
export default QuestionDetailPage;
