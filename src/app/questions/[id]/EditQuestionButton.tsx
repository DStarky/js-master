import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const EditQuestionButton = ({ questionId }: { questionId: number }) => {
  return (
    <Link href={`/questions/edit/${questionId}`}>
      <Button className="w-full">
        <Pencil2Icon />
        Edit Question
      </Button>
    </Link>
  );
};
export default EditQuestionButton;
