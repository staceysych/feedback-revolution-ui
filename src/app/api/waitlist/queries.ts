"use server";

import WaitList from "@/app/api/models/waitListModel";

export const postWaitListEmail = async (email: string) => {
  try {
    const newEntry = new WaitList({ email });
    await newEntry.save();

    return { successMsg: "Email added to waitlist successfully" };
  } catch (error: any) {
    return { err: error.code };
  }
};

export const getWaitListCount = async () => {
  try {
    return await WaitList.countDocuments();
  } catch (error: any) {
    return { err: error.code };
  }
};
