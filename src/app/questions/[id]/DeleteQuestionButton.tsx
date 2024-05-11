'use client';

import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Spinner } from '@/components';
import { deleteQuestion } from '@/service/questionService';

const DeleteQuestionButton = ({ questionId }: { questionId: number }) => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const deleteHandler = async (questionId: number) => {
    try {
      setIsDeleting(true);
      await deleteQuestion(questionId);
      router.push('/questions');
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            className="cursor-pointer"
            disabled={isDeleting}
          >
            <TrashIcon /> Delete Question {isDeleting && <Spinner />}
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
                disabled={isDeleting}
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
                disabled={isDeleting}
              >
                Yes, delete question
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Something went wrong...</AlertDialog.Title>
          <AlertDialog.Description>
            This question could not be deleted. Please try again later
          </AlertDialog.Description>
          <div className="flex justify-end">
            <Button
              className="mt-5 cursor-pointer text-center"
              color="gray"
              variant="soft"
              onClick={() => setError(false)}
            >
              OK
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};
export default DeleteQuestionButton;
