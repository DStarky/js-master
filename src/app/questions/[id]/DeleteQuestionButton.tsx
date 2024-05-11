import { TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const DeleteQuestionButton = ({ questionId }: { questionId: number }) => {
  return (
    <Button color="red">
      <TrashIcon /> Delete Question
    </Button>
  );
};
export default DeleteQuestionButton;
