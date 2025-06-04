import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Adjust path accordingly

const Beach = sequelize.define('Beach', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  directions_url: { type: DataTypes.STRING }
}, {
  tableName: 'beaches',
  timestamps: false
});

export default Beach;
