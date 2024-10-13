import { getWaitList } from "@/app/api/waitList";

export const fetchWaitListData = async () => {
  const waitListData = await getWaitList();

  return waitListData;
};
