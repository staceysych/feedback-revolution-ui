import { Box, Grid, Text, Progress } from "@chakra-ui/react";

import { countReviews } from "@/app/utils";
import { Review } from "@/app/types/common";

interface ReviewsCountProps {
  reviews: Review[];
}

const ReviewsCount = ({ reviews }: ReviewsCountProps) => {
  const { counts, totalReviews } = countReviews(reviews);
  return (
    <Box width="100%">
      {counts.map((count, index) => {
        const rating = index + 1;
        const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

        return (
          <Grid
            key={rating}
            templateColumns={{
              base: "30px 1fr 30px",
              sm: "36px 1fr 36px"
            }}
            alignItems="center"
            gap={{ base: 1, sm: 2 }}
            mb={{ base: 1, sm: 2 }}
          >
            <Text 
              fontSize={{ base: "2xs", sm: "xs" }} 
              textAlign="right" 
              color="brandDarkBlue"
            >
              {rating} Star
            </Text>

            <Progress
              value={percentage}
              size="sm"
              colorScheme="purple"
              borderRadius="md"
              bg="gray.200"
              width="100%"
              minWidth={{ base: "100px", sm: "150px"}}
            />

            <Text 
              fontSize={{ base: "2xs", sm: "xs" }} 
              fontWeight="bold" 
              color="brandDarkBlue"
            >
              {percentage}%
            </Text>
          </Grid>
        );
      })}
    </Box>
  );
};

export default ReviewsCount;
