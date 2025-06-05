import db from '../config/db.js';
import { DataTypes } from 'sequelize';

// Define models
const MajorOption = db.define('chatbot_major_options', {
  option_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  option_name: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'chatbot_major_options',
});

const Region = db.define('chatbot_regions', {
  region_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  region_name: DataTypes.STRING,
  option_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_regions',
});

const BeachType = db.define('chatbot_beach_types', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type_name: DataTypes.STRING,
  region_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_beach_types',
});

const Beach = db.define('chatbot_beaches', {
  beach_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  beach_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,        // ✅ Renamed from image_url to image_path
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_beaches',
});

// Fetch all major options
export const getMajorOptions = async () => {
  return await MajorOption.findAll();
};

// Fetch regions by major option ID
export const getRegionsByOptionId = async (option_id) => {
  return await Region.findAll({ where: { option_id } });
};

// Fetch beach types by region ID
export const getBeachTypesByRegionId = async (region_id) => {
  return await BeachType.findAll({ where: { region_id } });
};

// Fetch beaches by type ID
export const getBeachesByTypeId = async (type_id) => {
  return await Beach.findAll({
    attributes: [
      'beach_id',
      'beach_name',
      'description',
      'image_path',           // ✅ Match what frontend expects
      'directions_url'
    ],
    where: { type_id },
  });
};

// Define Wildlife Type model
const WildlifeType = db.define('chatbot_wildlife_types', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type_name: DataTypes.STRING,
  region_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_wildlife_types',
});

// Define Wildlife Place model
const WildlifePlace = db.define('chatbot_wildlife_places', {
  place_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,        // Use same naming convention
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_wildlife_places',
});

// Existing exports for beaches remain unchanged...

// Fetch wildlife types by region ID
export const getWildlifeTypesByRegionId = async (region_id) => {
  return await WildlifeType.findAll({ where: { region_id } });
};

// Fetch wildlife places by type ID
export const getWildlifePlacesByTypeId = async (type_id) => {
  return await WildlifePlace.findAll({
    attributes: [
      'place_id',
      'place_name',
      'description',
      'image_path',
      'directions_url'
    ],
    where: { type_id },
  });
};