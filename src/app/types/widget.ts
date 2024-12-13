interface User {
  name: string;
  email: string;
}

export interface ReviewData {
  body: string;
  rating: number;
  user: User;
}

enum Category {
  Feature = "Feature",
  UI = "UI",
  Other = "Other",
  Improvement = "Improvement",
}

export interface IIdeaData {
  body: string;
  category: Category;
  user: User;
}

enum Severity {
  Crucial = "Critical",
  Medium = "Medium",
  Low = "Low",
}

export interface IIssueData {
  body: string;
  severity: Severity;
  user: User;
  page: string;
  device: string;
}
