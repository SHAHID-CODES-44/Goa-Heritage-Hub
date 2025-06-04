// backend/models/wildlifeModel.js
import sequelize from "../config/db.js";

export const getAllSanctuaries = async () => {
  try {
    const [results, metadata] = await sequelize.query("SELECT * FROM sanctuaries");
    return results;
  } catch (error) {
    throw error;
  }
};
