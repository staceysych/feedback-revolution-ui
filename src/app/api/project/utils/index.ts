import crypto from "crypto";
import ProjectModel from "@/app/api/models/projectModel";

const generateId = (bytes = 12) => {
  return crypto.randomBytes(bytes).toString("hex");
};

export const generateUniqueProjectId = async () => {
  let projectId = "";
  let isUnique = false;

  while (!isUnique) {
    projectId = generateId();
    const existingProject = await ProjectModel.findOne({
      projectId,
    });
    isUnique = !existingProject;
  }

  return projectId;
};

export const generateUniqueAPIKey = async () => {
  let apiKey = "";
  let isUnique = false;

  while (!isUnique) {
    apiKey = generateId(32);
    const existingProject = await ProjectModel.findOne({
      apiKey,
    });
    isUnique = !existingProject;
  }

  return apiKey;
};
