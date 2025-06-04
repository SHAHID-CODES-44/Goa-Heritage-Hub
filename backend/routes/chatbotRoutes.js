import express from 'express';
import * as chatbotController from '../controllers/chatbotController.js';

const router = express.Router();

// Route to get all major options (categories)
router.get('/major-options', chatbotController.getMajorOptions);

// Get regions by major option id
router.get('/regions/:option_id', chatbotController.getRegionsByOption);

// Get beach types by region id
router.get('/beach-types/:region_id', chatbotController.getBeachTypesByRegion);

// Get beaches by beach type id
router.get('/beaches/:type_id', chatbotController.getBeachesByType);

export default router;
