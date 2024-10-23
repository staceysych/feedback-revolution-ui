"use server";

import ProjectModel from "@/app/api/project/models/projectModel";
import connectDB from "@/app/config/database";
import { ReviewData } from "@/app/types/dashboard";

export const submitReview = async (
  projectId: string,
  reviewData: ReviewData
) => {
  try {
    await connectDB();

    let project = await ProjectModel.findOne({ projectId });

    if (!project) {
      project = new ProjectModel({
        projectId,
        ideas: [],
        reviews: [],
        issues: [],
      });
    } else if (!project.reviews) {
      project.reviews = [];
    }

    project.reviews.push(reviewData);

    await project.save();

    return { successMsg: "Review added successfully" };
  } catch (error: any) {
    console.error("Error submitting review:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
