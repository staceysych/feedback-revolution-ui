import { EntityStatus } from "@/app/types/common";

export const mapStatusToColor = (status: EntityStatus): string => {
  switch (status) {
    case EntityStatus.Inactive:
      return "rgba(117, 117, 117, 0.4)";
    case EntityStatus.Active:
      return "rgba(76, 175, 80, 0.6)";
    case EntityStatus.Archived:
      return "rgba(117, 117, 117, 0.4)";
    default:
      return "rgba(117, 117, 117, 0.4)";
  }
};
