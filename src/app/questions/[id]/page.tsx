import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';

import prisma from '../../../../prisma/client';

import DeleteQuestionButton from './DeleteQuestionButton';
import EditQuestionButton from './EditQuestionButton';
import QuestionDetails from './QuestionDetails';

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
      columns={{ initial: '1', md: '5' }}
      gap="5"
    >
      <Box className="lg:col-span-4">
        <QuestionDetails question={question} />
      </Box>
      <Box>
        <Flex
          direction="column"
          gap="4"
        >
          <EditQuestionButton questionId={question.id} />
          <DeleteQuestionButton questionId={question.id} />
        </Flex>
      </Box>
    </Grid>
  );
};
export default QuestionDetailPage;
