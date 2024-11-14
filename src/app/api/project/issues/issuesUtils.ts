"use server";

import ProjectModel from "@/app/api/models/projectModel";
import connectDB from "@/app/config/database";
import { IIssueData } from "@/app/types/dashboard";

export const submitIssue = async (projectId: string, issueData: IIssueData) => {
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

    project.issues.push(issueData);

    await project.save();

    return { successMsg: "Idea added successfully" };
  } catch (error: any) {
    console.error("Error submitting idea:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
