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
