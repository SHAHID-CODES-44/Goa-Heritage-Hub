import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

// Adventure model
export const Adventure = sequelize.define('Adventure', {
  adventure_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true
  },
  direction_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'adventures',
  timestamps: false
});

// Beach model
export const Beach = sequelize.define('Beach', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  directions_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'beaches',
  timestamps: false
});
