import * as chatbotModel from '../models/chatbotModel.js';

// Get all major options
export const getMajorOptions = async (req, res) => {
  try {
    const options = await chatbotModel.getMajorOptions();
    res.json(options);
  } catch (error) {
    console.error('Error fetching major options:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get regions by major option id
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

// Get beach types by region id
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

// Get beaches by beach type id
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
