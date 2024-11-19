"use server";

import ProjectModel from "@/app/api/models/projectModel";
import connectDB from "@/app/api/config/database";
import { IIdeaData } from "@/app/types/dashboard";

export const submitIdea = async (projectId: string, ideaData: IIdeaData) => {
  try {
    await connectDB();

    let project = await ProjectModel.findOne({ projectId });

    if (!project) {
      throw new Error("Project not found");
    }

    project.ideas.push(ideaData);

    await project.save();

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

    const project = await ProjectModel.findOne({ projectId });

    if (!project) {
      return { errMsg: "Project not found" };
    }

    const idea = project.ideas.id(ideaId);

    if (!idea) {
      return { errMsg: "Idea not found" };
    }

    idea.votes = votes;

    await project.save();

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
