"use client";
import { Card, CardBody, Flex, List, Text } from "@chakra-ui/react";

import { Review } from "@/app/types/common";
import useSWR from "swr";
import { REVIEWS_API } from "@/app/utils";
import { fetcher } from "@/app/utils/fetcher";
import ListHeader from "@/app/dashboard/components/ListHeader";
import ReviewListItem from "@/app/dashboard/components/ReviewListItem";

import InfoTooltip from "@/app/components/InfoTooltip";
import ReviewsCount from "@/app/dashboard/components/ReviewsCount";
import { ReviewsFilters } from "@/app/dashboard/components/Filters";
import { useMemo, useState } from "react";

const TooltipActionContent = () => (
  <Flex direction="column" p={2} maxW="300px">
    <Text fontWeight="bold" mb={2}>
      Available Actions:
    </Text>
    <Flex gap={2} mb={2}>
      <Text>
        "Add to Display" - Makes a review visible on your website using our
        Review Cards Slider.
      </Text>
    </Flex>
    <Flex gap={2}>
      <Text>"Remove from Display" - Hides a review from your website.</Text>
    </Flex>
  </Flex>
);

const ActionColumnHeader = () => (
  <Flex align="center" gap={2}>
    <InfoTooltip TooltipContent={TooltipActionContent} label="actions" />
  </Flex>
);

const columns = [
  "",
  "user",
  "review",
  "rating",
  "date",
  "status",
  <ActionColumnHeader />,
];

const ReviewsList = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useSWR(`${REVIEWS_API}/${projectId}`, fetcher);
  const reviews = data?.data || [];

  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredReviews = useMemo(() => {
    return reviews.filter((review: Review) => {
      const matchesRating =
        !selectedRatings.length ||
        selectedRatings.includes(review.rating.toString());
      const matchesStatus =
        !selectedStatuses.length || selectedStatuses.includes(review.status);
      return matchesRating && matchesStatus;
    });
  }, [reviews, selectedRatings, selectedStatuses]);

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) /
      totalReviews || 0;

  if (isLoading) return <Text>Loading...</Text>;

  const handleRatingChange = (ratings: string[]) => {
    setSelectedRatings(ratings);
  };

  const handleStatusChange = (statuses: string[]) => {
    setSelectedStatuses(statuses);
  };

  return (
    <>
      <Flex mb={4} gap={4}>
        <Card
          minW="200px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow={"md"}
        >
          <CardBody>
            <Text textAlign={"center"}>Total Reviews</Text>
            <Text fontSize="6xl" fontWeight="bold" textAlign={"center"}>
              {totalReviews}
            </Text>
          </CardBody>
        </Card>

        <Card
          minW="200px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow={"md"}
        >
          <CardBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text textAlign={"center"}>Average Rating</Text>
            <Text fontSize="6xl" fontWeight="bold" textAlign={"center"}>
              {averageRating.toFixed(1)}
            </Text>
          </CardBody>
        </Card>
        <Card border="1px solid" borderColor="gray.100" boxShadow={"md"}>
          <CardBody>
            <ReviewsCount reviews={reviews} />
          </CardBody>
        </Card>
        <ReviewsFilters
          onRatingChange={handleRatingChange}
          onStatusChange={handleStatusChange}
        />
      </Flex>

      {!!filteredReviews.length ? (
        <>
          <ListHeader
            columns={columns}
            templateColumns="32px 60px 1fr 40px 80px 70px 170px 32px"
          />
          <List
            border={"1px solid "}
            borderColor={"gray.200"}
            borderRadius={"md"}
            boxShadow="md"
          >
            {filteredReviews.map((review: Review) => (
              <ReviewListItem
                key={review._id}
                review={review}
                projectId={projectId}
              />
            ))}
          </List>
        </>
      ) : (
        <Text>No reviews.</Text>
      )}
    </>
  );
};

export default ReviewsList;
