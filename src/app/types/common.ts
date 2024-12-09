export enum ProgressSteps {
  Discovery = "Discovery",
  Building = "Building",
  Done = "Done",
}

export enum EntityStatus {
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
  status: EntityStatus;
}

export enum IdeaCategory {
  Feature = "Feature",
  UI = "UI",
  Other = "Other",
  Improvement = "Improvement",
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
  status: EntityStatus;
}

export type TEntityStatus = EntityStatus | EntityStatus;
