import ProjectModel from "@/app/api/models/projectModel";
import { generateUniqueProjectId, generateUniqueAPIKey } from "./utils";

export const createProject = async () => {
  try {
    const projectId = await generateUniqueProjectId();
    const apiKey = await generateUniqueAPIKey();

    await ProjectModel.create({
      projectId,
      apiKey,
      reviews: [],
      ideas: [],
      issues: [],
    });

    return projectId;
  } catch (error: any) {
    throw new Error(error);
  }
};
