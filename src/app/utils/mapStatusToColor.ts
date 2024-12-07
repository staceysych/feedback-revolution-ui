import { IdeaStatus, ReviewStatus } from "@/app/types/common";

export const mapStatusToColor = (status: ReviewStatus | IdeaStatus): string => {
  switch (status) {
    case ReviewStatus.Inactive:
      return "rgba(117, 117, 117, 0.4)";
    case ReviewStatus.Active:
      return "rgba(76, 175, 80, 0.6)";
    case ReviewStatus.Archived:
      return "rgba(117, 117, 117, 0.4)";
    default:
      return "rgba(117, 117, 117, 0.4)";
  }
};
