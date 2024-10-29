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
      enum: ["Critical", "Medium", "Low"],
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
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);
