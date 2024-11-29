import { Box, Grid, Text, Progress } from "@chakra-ui/react";

import { countReviews } from "@/app/utils";
import { Review } from "@/app/types/common";

interface ReviewsCountProps {
  reviews: Review[];
}

const ReviewsCount = ({ reviews }: ReviewsCountProps) => {
  const { counts, totalReviews } = countReviews(reviews);
  return (
    <Box>
      {counts.map((count, index) => {
        const rating = index + 1;
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

        return (
          <Grid
            key={rating}
            templateColumns="36px 1fr 36px"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <Text fontSize="xs" textAlign="right" color="brandDarkBlue">
              {rating} Star
            </Text>

            <Progress
              value={percentage}
              size="sm"
              colorScheme="purple"
              borderRadius="md"
              bg="gray.200"
              width={"200px"}
            />

            <Text fontSize="xs" fontWeight="bold" color="brandDarkBlue">
              {percentage}%
            </Text>
          </Grid>
        );
      })}
    </Box>
  );
};

export default ReviewsCount;
