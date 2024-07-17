import express from "express";
import { getData } from "../../controllers/DataController";

const router = express.Router();

router.get("/", getData);

export { router as DataRouter };
