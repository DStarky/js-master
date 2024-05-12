'use client';

import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '@/components';
import { getUsers } from '@/service/userService';

const AuthorSelect = () => {
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

  return (
    <Select.Root>
      <Select.Trigger placeholder="Author..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
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
