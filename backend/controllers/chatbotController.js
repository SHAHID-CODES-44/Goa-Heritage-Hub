import * as chatbotModel from '../models/chatbotModel.js';

// Get all major options (e.g., Beaches, Wildlife, etc.)
export const getMajorOptions = async (req, res) => {
  try {
    const options = await chatbotModel.getMajorOptions();
    res.json(options);
  } catch (error) {
    console.error('Error fetching major options:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get regions for selected option (beach, wildlife, etc.)
export const getRegionsByOption = async (req, res) => {
  try {
    const option_id = req.params.option_id;
    const regions = await chatbotModel.getRegionsByOptionId(option_id);
    res.json(regions);
  } catch (error) {
    console.error('Error fetching regions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// BEACH-SPECIFIC ENDPOINTS
export const getBeachTypesByRegion = async (req, res) => {
  try {
    const region_id = req.params.region_id;
    const types = await chatbotModel.getBeachTypesByRegionId(region_id);
    res.json(types);
  } catch (error) {
    console.error('Error fetching beach types:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getBeachesByType = async (req, res) => {
  try {
    const type_id = req.params.type_id;
    const beaches = await chatbotModel.getBeachesByTypeId(type_id);
    res.json(beaches);
  } catch (error) {
    console.error('Error fetching beaches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// WILDLIFE-SPECIFIC ENDPOINTS
export const getWildlifeTypesByRegion = async (req, res) => {
  try {
    const region_id = req.params.region_id;
    const types = await chatbotModel.getWildlifeTypesByRegionId(region_id);
    res.json(types);
  } catch (error) {
    console.error('Error fetching wildlife types:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getWildlifePlacesByType = async (req, res) => {
  try {
    const type_id = req.params.type_id;
    const places = await chatbotModel.getWildlifePlacesByTypeId(type_id);
    res.json(places);
  } catch (error) {
    console.error('Error fetching wildlife places:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
