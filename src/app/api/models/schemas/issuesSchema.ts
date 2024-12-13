import { IssueSeverity, IssueStatus } from "@/app/types/common";
import { Schema } from "mongoose";

export const issueSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      required: true,
      enum: Object.values(IssueSeverity),
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(IssueStatus),
      default: IssueStatus.Open,
    },
    user: {
      name: {
        type: String,
      },
      email: {
        type: String,
        match: /.+\@.+\..+/,
      },
    },
    page: {
      type: String,
    },
    device: {
      type: String,
    },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);
