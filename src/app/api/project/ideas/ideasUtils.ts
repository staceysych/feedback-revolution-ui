"use server";

import ProjectModel from "@/app/api/project/models/projectModel";
import connectDB from "@/app/config/database";
import { IIdeaData } from "@/app/types/dashboard";

export const submitIdea = async (projectId: string, ideaData: IIdeaData) => {
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
    }

    project.ideas.push(ideaData);

    await project.save();

    return { successMsg: "Idea added successfully" };
  } catch (error: any) {
    console.error("Error submitting idea:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
