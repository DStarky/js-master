import dynamic from 'next/dynamic';

import QuestionFormSkeleton from '../_components/QuestionFormSkeleton';

const QuestionForm = dynamic(() => import('../_components/QuestionForm'), {
  ssr: false,
  loading: () => <QuestionFormSkeleton />,
});

const NewQuestionPage = () => {
  return <QuestionForm />;
};
export default NewQuestionPage;
