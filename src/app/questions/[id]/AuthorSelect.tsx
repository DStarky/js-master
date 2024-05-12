'use client';

import { Question } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '@/components';
import { updateQuestion } from '@/service/questionService';
import { getUsers } from '@/service/userService';

const AuthorSelect = ({ question }: { question: Question }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  if (isLoading) {
    return <Skeleton height="2rem" />;
  }

  if (error) {
    return null;
  }

  const changeAuthorHandler = async (userId: string) => {
    const data = {
      authoredByUserID: userId || null,
    };
    await updateQuestion(question.id, data);
  };

  return (
    <Select.Root onValueChange={changeAuthorHandler} defaultValue={question.authoredByUserID || ''}>
      <Select.Trigger placeholder="Author..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="">None</Select.Item>
          {users?.map(user => (
            <Select.Item
              key={user.id}
              value={user.id}
            >
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
export default AuthorSelect;
