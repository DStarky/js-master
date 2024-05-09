import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

interface QuestionStatusBadgeProps {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: 'gray' | 'yellow' | 'green' }
> = {
  DONT_KNOW: {
    label: 'Don`t know',
    color: 'gray',
  },
  IN_PROGRESS: {
    label: 'In progress',
    color: 'yellow',
  },
  KNOW: {
    label: 'Know',
    color: 'green',
  },
};

const QuestionStatusBadge = ({ status }: QuestionStatusBadgeProps) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
export default QuestionStatusBadge;
