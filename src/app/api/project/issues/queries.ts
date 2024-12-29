"use server";

import ProjectModel from "@/app/api/models/projectModel";
import { IssueStatus } from "@/app/types/common";
import { IIssueData } from "@/app/types/widget";
import { sortByDate } from "@/app/utils";
import { Tier } from "@/app/types/user";
import User from "@/app/api/models/userModel";

export const submitIssue = async (projectId: string, issueData: IIssueData) => {
  try {
    const user = await User.findOne({ projects: projectId });
    
    if (!user) {
      return { errMsg: "Project owner not found" };
    }

    // For Test tier users, check issue count
    if (user.tier === Tier.Test) {
      const project = await ProjectModel.findOne({ 
        projectId
      });

      if (project && project.issues.length >= 5) {
        console.log("Free tier users can only add up to 5 issues");
        return { errMsg: "Free tier users can only add up to 5 issues" };
      }
    }

    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { issues: {...issueData, status: IssueStatus.Open} } }
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

export const getAllIssues = async (projectId: string) => {
  const project = await ProjectModel.findOne(
    { projectId },
    {
      issues: {
        $filter: {
          input: "$issues",
          cond: { $ne: ["$$this.status", IssueStatus.Archived] }
        }
      }
    }
  );

  if (!project) {
    throw new Error("Project not found");
  }

  return sortByDate(project.issues);
};

export const updateIssueStatus = async (
  projectId: string, 
  issueId: string,
  status: IssueStatus
) => {
  try {

    console.log(projectId, issueId, status);
    const updatedResult = await ProjectModel.updateOne(
      {
        projectId,
        "issues._id": issueId,
      },
      {
        $set: { "issues.$.status": status },
      }
    );

    if (updatedResult.matchedCount === 0) {
      return { errMsg: "Issue not found" };
    }

    return updatedResult;
  } catch (error: any) {
    console.error("Error updating issue status:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};

