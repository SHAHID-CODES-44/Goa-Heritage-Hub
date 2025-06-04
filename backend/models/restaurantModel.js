import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Adjust path to your Sequelize instance

const Restaurant = sequelize.define('Restaurant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cuisine: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'restaurants',
  timestamps: false, // Set to true if you have createdAt and updatedAt columns
});

export default Restaurant;
