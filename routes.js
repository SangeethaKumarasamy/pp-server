import express from "express";
import { service } from "services.js";

const route = express.Router();

route.get("/", service.getDetails);

route.post("/", service.addDetails);

route.put("/:id", service.updateDetails);

route.delete("/:id", service.deleteDetails);

export { route };