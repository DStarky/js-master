import { Box, Card, Flex } from '@radix-ui/themes';

import { Skeleton } from '@/components';

const LoadingQuestionDetailPage = () => {
  return (
    <Box>
      <Skeleton
        height={30}
        width="20rem"
      />
      <Flex
        gap="3"
        my="2"
      >
        <Skeleton width="5rem" />
        <Skeleton width="3rem" />
        <Skeleton width="6rem" />
      </Flex>
      <Card
        className="prose"
        mt="4"
      >
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};
export default LoadingQuestionDetailPage;
