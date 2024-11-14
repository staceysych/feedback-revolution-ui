import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

export default User;
