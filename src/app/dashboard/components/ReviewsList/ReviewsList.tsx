"use client";
import {
  Badge,
  Box,
  Flex,
  IconButton,
  List,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { Review } from "@/app/types/common";
import useSWR from "swr";
import { REVIEWS_API } from "@/app/utils";
import { fetcher } from "@/app/utils/fetcher";
import ListHeader from "@/app/dashboard/components/ListHeader";
import ReviewListItem from "@/app/dashboard/components/ReviewListItem";

import { AiOutlineInfo } from "react-icons/ai";

const ActionColumnHeader = () => (
  <Flex align="center" gap={2}>
    <Tooltip label="Available actions for each item" placement="top">
      <Flex alignItems={"center"} cursor={"pointer"} gap={1} ml={"auto"}>
        <Text color="gray.500" fontSize="sm">
          actions
        </Text>

        <Badge background={"brand.text"} color="white" p={0}>
          <AiOutlineInfo />
        </Badge>
      </Flex>
    </Tooltip>
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

  if (isLoading) return <Text>Loading...</Text>;

  return (
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
        {!!reviews.length
          ? reviews.map((review: Review) => (
              <ReviewListItem key={review._id} review={review} />
            ))
          : "No reviews yet."}
      </List>
    </>
  );
};

export default ReviewsList;
