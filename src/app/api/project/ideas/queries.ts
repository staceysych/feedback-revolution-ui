"use server";

import ProjectModel from "@/app/api/models/projectModel";
import connectDB from "@/app/api/config/database";
import { IIdeaData } from "@/app/types/widget";

export const submitIdea = async (projectId: string, ideaData: IIdeaData) => {
  try {
    await connectDB();

    const updateResult = await ProjectModel.updateOne(
      { projectId },
      { $push: { ideas: ideaData } }
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
    await connectDB();

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
  await connectDB();

  const project = await ProjectModel.findOne({ projectId }).select("ideas");

  if (!project) {
    throw new Error("Project not found");
  }

  return project.ideas;
};
