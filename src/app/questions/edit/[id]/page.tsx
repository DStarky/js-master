import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import prisma from '../../../../../prisma/client';

import QuestionFormSkeleton from './loading';

const QuestionForm = dynamic(() => import('../../_components/QuestionForm'), {
  ssr: false,
  loading: () => <QuestionFormSkeleton />,
});

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
