import { ReviewStatus } from "@/app/types/common";
import { Schema } from "mongoose";

export const reviewSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
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
    status: {
      type: String,
      enum: Object.values(ReviewStatus),
      default: ReviewStatus.Inactive,
    },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);
