import { Schema, model, models } from "mongoose";

import { reviewSchema } from "@/app/api/project/models/reviewsSchema";
import { ideaSchema } from "@/app/api/project/models/ideasSchema";
import { issueSchema } from "@/app/api/project/models/issuesSchema";

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
