import User from "@/app/api/models/userModel";
import { Tier } from "@/app/types/user";

type User = {
  userName: string;
  email: string;
  password: string;
};

export const createUser = async (user: User) => {
  try {
    await User.create({ ...user, tier: Tier.Demo });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const addProjectIdToUser = async (email: string, projectId: string) => {
  try {
    await User.updateOne({ email }, { $push: { projects: projectId } });
  } catch (error: any) {
    throw new Error(error);
  }
};
