// backend/services/service.js
import db from './config/db.js';

export async function getMainOptionsFromDB() {
  try {
    const [rows] = await db.query('SELECT id, option_name FROM options WHERE parentId IS NULL');
    return rows;
  } catch (error) {
    console.error('Error fetching main options:', error);
    throw error;
  }
}

export async function getSubOptionsFromDB(parentId) {
  try {
    const [rows] = await db.query('SELECT id, option_name FROM options WHERE parentId = ?', [parentId]);
    return rows;
  } catch (error) {
    console.error('Error fetching sub options:', error);
    throw error;
  }
}
