import mongoose from "mongoose";

const { Schema } = mongoose;

const flowSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
});

const Flow = mongoose.models.Flow || mongoose.model("Flow", flowSchema);

export default Flow;
