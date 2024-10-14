import { Schema, model, models } from "mongoose";

const waitListSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const WaitListModel = models.waitlist || model("waitlist", waitListSchema);

export default WaitListModel;
