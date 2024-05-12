import { Box, Flex, Grid } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

import prisma from '../../../../prisma/client';

import AuthorSelect from './AuthorSelect';
import DeleteQuestionButton from './DeleteQuestionButton';
import EditQuestionButton from './EditQuestionButton';
import QuestionDetails from './QuestionDetails';
import authOptions from '@/auth/authOptions';

interface QuestionDetailPageProps {
  params: {
    id: string;
  };
}

const QuestionDetailPage = async ({ params }: QuestionDetailPageProps) => {
  const session = await getServerSession(authOptions);

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
      {session && (
        <Box>
          <Flex
            direction="column"
            gap="4"
          >
            <AuthorSelect />
            <EditQuestionButton questionId={question.id} />
            <DeleteQuestionButton questionId={question.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};
export default QuestionDetailPage;
