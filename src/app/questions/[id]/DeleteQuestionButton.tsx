'use client';

import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

import { deleteQuestion } from '@/service/questionService';

const DeleteQuestionButton = ({ questionId }: { questionId: number }) => {
  const router = useRouter();
  const deleteHandler = async (questionId: number) => {
    try {
      await deleteQuestion(questionId);
      router.push('/questions');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          color="red"
          className="cursor-pointer"
        >
          <TrashIcon /> Delete Question
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          This action cannot be undone. This will permanently delete question
          and remove your data from our servers.
        </AlertDialog.Description>
        <div
          style={{
            display: 'flex',
            gap: 25,
            justifyContent: 'flex-end',
            marginTop: 25,
          }}
        >
          <AlertDialog.Cancel>
            <Button
              className="cursor-pointer"
              color="gray"
              variant="soft"
            >
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="red"
              className="cursor-pointer"
              variant="soft"
              onClick={() => deleteHandler(questionId)}
            >
              Yes, delete question
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
export default DeleteQuestionButton;
