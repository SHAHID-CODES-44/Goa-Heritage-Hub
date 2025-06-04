// backend/controllers/wildlifeController.js
import { getAllSanctuaries } from "../models/wildlifeModel.js";

export const getWildlifeList = async (req, res) => {
  try {
    const sanctuaries = await getAllSanctuaries();
    res.json(sanctuaries);
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  }
};
