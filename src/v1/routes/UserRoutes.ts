import express from "express";
import { getUserById } from "../../controllers/UserController";

const router = express.Router();

router.get("/:id", getUserById);

export { router as UserRouter };
