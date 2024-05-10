import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';

import prisma from '../../../../prisma/client';

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
      columns={{ initial: '1', md: '2' }}
      gap="5"
    >
      <Box>
        <QuestionDetails question={question} />
      </Box>
      <Box>
        <EditQuestionButton questionId={question.id} />
      </Box>
    </Grid>
  );
};
export default QuestionDetailPage;
