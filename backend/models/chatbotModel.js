import db from '../config/db.js';
import { DataTypes } from 'sequelize';

// Define MajorOption model
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

// Define Region model
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

// Define BeachType model
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

// Define Beach model
const Beach = db.define('chatbot_beaches', {
  beach_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  beach_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_beaches',
});

// Define WildlifeType model
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

// Define WildlifePlace model
const WildlifePlace = db.define('chatbot_wildlife_places', {
  place_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_wildlife_places',
});

// Define AdventureType model
const AdventureType = db.define('chatbot_adventure_types', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type_name: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'chatbot_adventure_types',
});

// Define AdventurePlace model
const AdventurePlace = db.define('chatbot_adventure_places', {
  place_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_adventure_places',
});

// StayEatsType model
const StayEatsType = db.define('chatbot_stayeats_types', {
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type_name: DataTypes.STRING,
  region_id: DataTypes.INTEGER, // if region relevant
}, {
  timestamps: false,
  tableName: 'chatbot_stayeats_types',
});

// StayEatsPlace model
const StayEatsPlace = db.define('chatbot_stayeats_places', {
  place_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_path: DataTypes.STRING,
  directions_url: DataTypes.STRING,
  type_id: DataTypes.INTEGER,
}, {
  timestamps: false,
  tableName: 'chatbot_stayeats_places',
});

// Export fetch functions

// Major Options
export const getMajorOptions = async () => {
  return await MajorOption.findAll();
};

// Regions by option ID
export const getRegionsByOptionId = async (option_id) => {
  return await Region.findAll({ where: { option_id } });
};

// Beach Types by region ID
export const getBeachTypesByRegionId = async (region_id) => {
  return await BeachType.findAll({ where: { region_id } });
};

// Beaches by type ID
export const getBeachesByTypeId = async (type_id) => {
  return await Beach.findAll({
    attributes: ['beach_id', 'beach_name', 'description', 'image_path', 'directions_url'],
    where: { type_id },
  });
};

// Wildlife Types by region ID
export const getWildlifeTypesByRegionId = async (region_id) => {
  return await WildlifeType.findAll({ where: { region_id } });
};

// Wildlife Places by type ID
export const getWildlifePlacesByTypeId = async (type_id) => {
  return await WildlifePlace.findAll({
    attributes: ['place_id', 'place_name', 'description', 'image_path', 'directions_url'],
    where: { type_id },
  });
};

// Adventure Types
export const getAdventureTypes = async () => {
  return await AdventureType.findAll();
};

// Adventure Places by type ID
export const getAdventurePlacesByTypeId = async (type_id) => {
  return await AdventurePlace.findAll({
    attributes: ['place_id', 'place_name', 'description', 'image_path', 'directions_url'],
    where: { type_id },
  });
};

// Export functions for StayEats

export const getStayEatsTypesByRegionId = async (region_id) => {
  return await StayEatsType.findAll({ where: { region_id } });
};

export const getStayEatsPlacesByTypeId = async (type_id) => {
  return await StayEatsPlace.findAll({
    attributes: ['place_id', 'place_name', 'description', 'image_path', 'directions_url'],
    where: { type_id },
  });
};