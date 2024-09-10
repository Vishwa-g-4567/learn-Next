import { model, models, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    created_at: String,
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("short_description").get(function () {
  return this.description.substr(0, 250) + "...";
});

postSchema.virtual("created_at_formatted").get(function () {
  return changeDateFormat(this.created_at);
});

function changeDateFormat(date_str) {
  const date = new Date(date_str);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const postModel = models.Post || model("Post", postSchema);

export default postModel;
