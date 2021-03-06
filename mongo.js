import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = "mongodb+srv://sangeetha:sangeetha123@cluster0.kl6wa.mongodb.net/job_portal";
const mongoDbName = "PP_job_portal";

const mongo = {
  db: null,
  details: null,
  async connect() {
    const client = new MongoClient(mongoURL);
    await client.connect();
    console.log("MongoDB connection established");

    this.db = client.db(mongoDbName);
    console.log("MongoDB Selected");

    this.details = this.db.collection("Details");
    console.log("Collections Initialized");
  },
};

export { mongo };