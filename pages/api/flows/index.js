import dbConnect from "../../../db/connect";
import Flow from "../../../models/Flow";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const flows = await Flow.find({});
    return response.status(200).json(flows);
  }

  if (request.method === "POST") {
    try {
      const flowData = request.body;
      const flow = await Flow.create(flowData);
      await flow.save();
      return response.status(201).json({ status: "Flow created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
