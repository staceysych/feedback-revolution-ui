"use server";

import ProjectModel from "@/app/api/models/projectModel";
import { ReviewData } from "@/app/types/widget";
import { EntityStatus } from "@/app/types/common";
import { sortByDate } from "@/app/utils";

export const submitReview = async (
  projectId: string,
  reviewData: ReviewData
) => {
  try {
    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { reviews: { ...reviewData, status: EntityStatus.Inactive } } }
    );

    if (updateResult.matchedCount === 0) {
      return { errMsg: "Project not found" };
    }

    return { successMsg: "Review added successfully" };
  } catch (error: any) {
    console.error("Error submitting review:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};

export const getAllReviews = async (projectId: string) => {
  const project = await ProjectModel.findOne({ projectId }).select("reviews");

  if (!project) {
    throw new Error("Project not found");
  }

  return sortByDate(project.reviews);
};
export const getActiveReviews = async (projectId: string) => {
  const project = await ProjectModel.findOne({ projectId }).select("reviews");

  if (!project) {
    throw new Error("Project not found");
  }

  const activeReviews = project.reviews.filter(
    (review: { status: string }) => review.status === EntityStatus.Active
  );

  return sortByDate(activeReviews);
};

export const updateReviewStatus = async (
  projectId: string,
  reviewId: string,
  status: EntityStatus
) => {
  try {
    const updatedResult = await ProjectModel.updateOne(
      {
        projectId,
        "reviews._id": reviewId,
      },
      {
        $set: { "reviews.$.status": status },
      }
    );

    if (updatedResult.matchedCount === 0) {
      return { errMsg: "Review not found" };
    }

    return updatedResult;
  } catch (error: any) {
    console.error("Error updating review status:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
