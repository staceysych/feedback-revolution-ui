"use server";

import WaitList from "@/app/api/models/waitListModel";
import connectDB from "@/app/config/database";

export const getWaitList = async () => {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await WaitList.find()));

    return { data };
  } catch (error: any) {
    return { errMsg: error.message };
  }
};

export const postWaitListEmail = async (email: string) => {
  try {
    await connectDB();
    const newEntry = new WaitList({ email });
    await newEntry.save();

    return { successMsg: "Email added to waitlist successfully" };
  } catch (error: any) {
    return { err: error.code };
  }
};
