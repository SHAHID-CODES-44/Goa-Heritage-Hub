// backend/routes/wildlifeRoute.js
import express from "express";
import { getWildlifeList } from "../controllers/wildlifeController.js";

const router = express.Router();
router.get("/", getWildlifeList);

export default router;
