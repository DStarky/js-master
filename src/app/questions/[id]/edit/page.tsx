import { notFound } from 'next/navigation';
import prisma from '../../../../../prisma/client';
import QuestionForm from '../../_components/QuestionForm';

interface QuestionDetailPageProps {
  params: {
    id: string;
  };
}

const EditQuestionPage = async ({
  params: { id },
}: QuestionDetailPageProps) => {
  const question = await prisma.question.findUnique({
    where: { id: Number(id) },
  });

  if (!question) notFound();

  return <QuestionForm question={question} />;
};
export default EditQuestionPage;
