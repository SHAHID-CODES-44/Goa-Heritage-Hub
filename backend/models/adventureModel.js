import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

// Define the Adventure model
const Adventure = sequelize.define('Adventure', {
  adventure_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direction_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'adventures',
  timestamps: false, // if you don't have createdAt/updatedAt columns
});

export default Adventure;
