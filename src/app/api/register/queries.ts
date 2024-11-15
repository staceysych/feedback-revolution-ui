import User from "@/app/api/models/userModel";

type User = {
  userName: string;
  email: string;
  password: string;
};

export const createUser = async (user: User) => {
  try {
    await User.create(user);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
