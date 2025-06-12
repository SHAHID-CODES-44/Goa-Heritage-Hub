import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

// Adventure model (existing)
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

// Beach model (existing)
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

// 🆕 Stay & Eats (restaurants) model
export const Restaurant = sequelize.define('Restaurant', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cuisine: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 0.0
  }
}, {
  tableName: 'restaurants',
  timestamps: false
});
