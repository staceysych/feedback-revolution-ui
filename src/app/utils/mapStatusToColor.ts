import { ReviewStatus } from "@/app/types/common";

export const mapStatusToColor = (status: ReviewStatus): string => {
  switch (status) {
    case ReviewStatus.Inactive:
      return "rgba(117, 117, 117, 0.4)"; // Softer gray
    case ReviewStatus.Active:
      return "rgba(76, 175, 80, 0.6)"; // Slightly transparent green
    case ReviewStatus.Archived:
      return "rgba(117, 117, 117, 0.4)"; // More transparent gray for archived
    default:
      return "rgba(117, 117, 117, 0.4)"; // Default soft gray
  }
};
