import { Schema, model, models } from "mongoose";

import {
  reviewSchema,
  ideaSchema,
  issueSchema,
} from "@/app/api/models/schemas";

const projectSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    reviews: [reviewSchema],
    ideas: [ideaSchema],
    issues: [issueSchema],
  },
  { timestamps: true }
);

const ProjectModel = models.Project || model("Project", projectSchema);

export default ProjectModel;
