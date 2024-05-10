import { Box } from '@radix-ui/themes';

import { Skeleton } from '@/components';

const LoadingNewQuestionPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="20rem" />
      <Skeleton
        height="20rem"
        width="20rem"
      />
    </Box>
  );
};
export default LoadingNewQuestionPage;
