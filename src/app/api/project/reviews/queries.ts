"use server";

import ProjectModel from "@/app/api/models/projectModel";
import connectDB from "@/app/api/config/database";
import { ReviewData } from "@/app/types/dashboard";

export const submitReview = async (
  projectId: string,
  reviewData: ReviewData
) => {
  try {
    await connectDB();

    let project = await ProjectModel.findOne({ projectId });

    if (!project) {
      throw new Error("Project not found");
    }

    project.reviews.push(reviewData);

    await project.save();

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
