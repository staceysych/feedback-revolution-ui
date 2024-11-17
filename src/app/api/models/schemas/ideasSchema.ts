import { ProgressSteps } from "@/app/types/common";
import { Schema } from "mongoose";

export const ideaSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Feature", "UI", "Other", "Improvement"],
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
    votes: {
      type: Number,
      default: 0,
    },
    progress: {
      type: String,
      enum: Object.values(ProgressSteps),
    },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);