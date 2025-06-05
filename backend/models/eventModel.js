import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // your Sequelize instance

const Event = sequelize.define('Event', {
  event_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  directions_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'events',
  timestamps: false,  // disable createdAt, updatedAt if not needed
});

export default Event;
