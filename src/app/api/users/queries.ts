import User from "@/app/api/models/userSchema";

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
