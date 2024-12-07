export enum ProgressSteps {
  Discovery = "Discovery",
  Building = "Building",
  Done = "Done",
}

export enum ReviewStatus {
  Inactive = "Inactive",
  Active = "Active",
  Archived = "Archived",
}

export interface Review {
  _id: string;
  body: string;
  rating: number;
  user: {
    name?: string;
    email: string;
  };
  createdAt: Date;
  status: ReviewStatus;
}

export enum IdeaCategory {
  Feature = "Feature",
  UI = "UI",
  Other = "Other",
  Improvement = "Improvement",
}

export enum IdeaStatus {
  Inactive = "Inactive",
  Active = "Active",
  Archived = "Archived",
}

export interface Idea {
  _id: string;
  body: string;
  category: string;
  user: {
    name?: string;
    email: string;
  };
  votes: number;
  progress: ProgressSteps;
  createdAt: Date;
  status: IdeaStatus;
}
