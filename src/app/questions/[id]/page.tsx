import { notFound } from 'next/navigation';

import prisma from '../../../../prisma/client';

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
      <p>{question.title}</p>
      <p>{question.description}</p>
      <p>{question.status}</p>
      <p>{question.complexity}</p>
      <p>{question.createdAt.toLocaleDateString('ru-RU')}</p>
    </div>
  );
};
export default QuestionDetailPage;
