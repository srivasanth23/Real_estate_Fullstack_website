import express from "express";
import { createUser, bookVisit } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);

export { router as userRoutes };
