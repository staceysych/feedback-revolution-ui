"use server";

import WaitList from "@/app/api/waitlist/models/waitListModel";
import connectDB from "@/app/config/database";

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
