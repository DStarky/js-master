import { Complexity } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

interface QuestionComplexityBadgeProps {
  complexity: Complexity;
}

const complexityMap: Record<
  Complexity,
  { label: string; color: 'red' | 'yellow' | 'green' }
> = {
  EASY: {
    label: 'Easy',
    color: 'green',
  },
  MEDIUM: {
    label: 'Medium',
    color: 'yellow',
  },
  HARD: {
    label: 'Hard',
    color: 'red',
  },
};

const QuestionComplexityBadge = ({
  complexity,
}: QuestionComplexityBadgeProps) => {
  return (
    <Badge color={complexityMap[complexity].color}>
      {complexityMap[complexity].label}
    </Badge>
  );
};
export default QuestionComplexityBadge;
