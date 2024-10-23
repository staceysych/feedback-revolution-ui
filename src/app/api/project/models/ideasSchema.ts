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
  },
  { _id: true }
);
