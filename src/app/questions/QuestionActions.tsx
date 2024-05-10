import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const QuestionActions = () => {
  return (
    <div className="mb-5">
      <Link href="/questions/new">
        <Button>New Question</Button>
      </Link>
    </div>
  );
};
export default QuestionActions;
