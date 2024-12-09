"use server";

import ProjectModel from "@/app/api/models/projectModel";
import { IIssueData } from "@/app/types/widget";

export const submitIssue = async (projectId: string, issueData: IIssueData) => {
  try {
    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { issues: issueData } }
    );

    if (updateResult.matchedCount === 0) {
      return { errMsg: "Project not found" };
    }

    return { successMsg: "Issue added successfully" };
  } catch (error: any) {
    console.error("Error submitting idea:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
