import { IssueSeverity, IssueStatus } from "@/app/types/common";

export const getSeverityColor = (severity: string) => {
    switch (severity) {
      case IssueSeverity.Critical:
        return "red.500";
      case IssueSeverity.Medium:
        return "orange.400";
      case IssueSeverity.Low:
        return "blue.400";
      default:
        return "gray.500";
    }
  };

  export const getStatusColor = (status: string) => {
    return status === IssueStatus.Open ? "red.100" : "green.100";
  };


export const getButtonTextForIssues = (status: IssueStatus) => {
  switch (status) {
    case IssueStatus.Open:
      return { text: "Resolve the issue", status: IssueStatus.Resolved };
    case IssueStatus.Resolved:
      return { text: "Reopen the issue", status: IssueStatus.Open };
  }
};
