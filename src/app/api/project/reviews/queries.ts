"use server";

import ProjectModel from "@/app/api/models/projectModel";
import connectDB from "@/app/api/config/database";
import { ReviewData } from "@/app/types/widget";
import { ReviewStatus } from "@/app/types/common";

export const submitReview = async (
  projectId: string,
  reviewData: ReviewData
) => {
  try {
    await connectDB();

    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { reviews: { ...reviewData, status: ReviewStatus.Inactive } } }
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
  await connectDB();

  const project = await ProjectModel.findOne({ projectId }).select("reviews");

  if (!project) {
    throw new Error("Project not found");
  }

  return project.reviews;
};

export const updateReviewStatus = async (
  projectId: string,
  reviewId: string,
  status: ReviewStatus
) => {
  try {
    await connectDB();

    const updateResult = await ProjectModel.updateOne(
      {
        projectId,
        "reviews._id": reviewId,
      },
      {
        $set: { "reviews.$.status": status },
      }
    );

    if (updateResult.matchedCount === 0) {
      return { errMsg: "Review not found" };
    }

    return { successMsg: "Review status updated successfully" };
  } catch (error: any) {
    console.error("Error updating review status:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
