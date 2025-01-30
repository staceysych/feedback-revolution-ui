import { Tier } from "@/app/types/user";
import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    tier: {
      type: String,
      enum: Object.values(Tier),
      default: Tier.Standard,
    },
    customerId: {
      type: String,
    },
    archivedCustomerIds: [{
      type: String,
    }],
    subscriptionStart: {
      type: Date,
    },
    subscriptionEnd: {
      type: Date,
    },
    subscriptionPeriod: {
      type: String,
      enum: ['monthly', 'yearly'],
    }
  },
  { _id: true, timestamps: { createdAt: true, updatedAt: false } }
);

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

export default User;
