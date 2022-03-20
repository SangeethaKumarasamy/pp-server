import { ObjectId } from "mongodb";
import { mongo as db } from "../mongo.js";

const service = {
  async getDetails(req, res) {
    try {
      const data = await db.details.find().toArray();
      console.log("details fetched");
      res.json({ status: "success", data });
    } catch (error) {
      console.log("Error fetching details", error);
      res.json({ status: "error", error: "Cannot fetch details data" });
    }
  },

  async addDetails(req, res) {
    try {
      const { insertedId: _id } = await db.details.insertOne(req.body);
      console.log("details Inserted", _id, req.body);
      res.json({ status: "success", data: { _id, ...req.body } });
    } catch (error) {
      console.log("Error inserting details", error);
      res.json({ status: "error", error: "Cannot insert details data" });
    }
  },

  async updateDetails(req, res) {
    try {
      console.log(req.params.id);
      console.log(req.body);
      const { value } = await db.details.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        { returnDocument: "after" }
      );
      console.log("details Updated", req.params.id, req.body);
      res.json({ status: "success", data: value });
    } catch (error) {
      console.log("Error updating details", error);
      res.json({ status: "error", error: "Cannot update details" });
    }
  },

  async deleteDetails(req, res) {
    try {
      console.log(req.params.id);
      await db.details.deleteOne({ _id: ObjectId(req.params.id) });
      console.log("details Deleted", req.params.id);
      res.json({ status: "success" });
    } catch (error) {
      console.log("Error deleting details", error);
      res.json({ status: "error", error: "Cannot delete details" });
    }
  },
};

export { service };