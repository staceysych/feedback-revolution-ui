import { EntityStatus, IssueStatus } from "@/app/types/common";

export const getButtonText = (status: EntityStatus) => {
  switch (status) {
    case EntityStatus.Inactive:
      return { text: "Add to Display", status: EntityStatus.Active };
    case EntityStatus.Active:
      return { text: "Remove from Display", status: EntityStatus.Inactive };
    case EntityStatus.Archived:
      return null;
    default:
      return null;
  }
};
