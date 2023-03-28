import mongoose from "mongoose";

const { Schema } = mongoose;

const flowSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.models.Flow || mongoose.model("Flow", flowSchema);
