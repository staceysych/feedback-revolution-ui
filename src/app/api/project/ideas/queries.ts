"use server";

import ProjectModel from "@/app/api/models/projectModel";
import { EntityStatus, ProgressSteps } from "@/app/types/common";

import { IIdeaData } from "@/app/types/widget";
import { sortByDate } from "@/app/utils";

export const submitIdea = async (projectId: string, ideaData: IIdeaData) => {
  try {
    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { ideas: { ...ideaData, status: EntityStatus.Inactive } } }
    );

    if (updateResult.matchedCount === 0) {
      return { errMsg: "Project not found" };
    }

    return { successMsg: "Idea added successfully" };
  } catch (error: any) {
    console.error("Error submitting idea:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};

export const updateIdeaVotes = async (
  projectId: string,
  ideaId: string,
  votes: number
) => {
  try {
    const updateResult = await ProjectModel.updateOne(
      { projectId, "ideas._id": ideaId },
      { $set: { "ideas.$.votes": votes } }
    );

    if (updateResult.matchedCount === 0) {
      return { errMsg: "Project or idea not found" };
    }

    return { successMsg: "Votes updated successfully" };
  } catch (error: any) {
    console.error("Error updating votes:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};

export const getAllIdeas = async (projectId: string) => {
  const project = await ProjectModel.findOne({ projectId }).select("ideas");

  if (!project) {
    throw new Error("Project not found");
  }

  return sortByDate(project.ideas);
};

export const getActiveIdeas = async (projectId: string) => {
  const project = await ProjectModel.findOne({ projectId }).select("ideas");

  if (!project) {
    throw new Error("Project not found");
  }

  const activeIdeas = project.ideas.filter(
    (idea: { status: string }) => idea.status === EntityStatus.Active
  );

  return activeIdeas.sort(
    (a: { votes: number }, b: { votes: number }) => b.votes - a.votes
  );
};

export const updateIdeaStatus = async (
  projectId: string,
  ideaId: string,
  status: EntityStatus,
  progress: ProgressSteps | undefined
) => {
  try {
    const updatedResult = await ProjectModel.updateOne(
      {
        projectId,
        "ideas._id": ideaId,
      },
      {
        $set: { "ideas.$.status": status, "ideas.$.progress": progress },
      }
    );

    if (updatedResult.matchedCount === 0) {
      return { errMsg: "Idea not found" };
    }

    return updatedResult;
  } catch (error: any) {
    console.error("Error updating idea status:", error);
    return { errMsg: error.message || "An error occurred" };
  }
};
