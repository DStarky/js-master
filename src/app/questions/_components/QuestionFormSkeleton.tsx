import { Box } from '@radix-ui/themes';

import { Skeleton } from '@/components';

const QuestionFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton
        width="36rem"
        height="2rem"
        className="mb-4"
      />
      <Skeleton
        height="24rem"
        width="36rem"
      />
    </Box>
  );
};
export default QuestionFormSkeleton;
