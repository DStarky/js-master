import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const QuestionPage = () => {
  return (
    <div>
      <Link href="/questions/new">
        <Button>New Question</Button>
      </Link>
    </div>
  );
};
export default QuestionPage;
