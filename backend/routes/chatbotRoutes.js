import express from 'express';
import * as chatbotController from '../controllers/chatbotController.js';

const router = express.Router();

// Route to get all major options (categories)
router.get('/major-options', chatbotController.getMajorOptions);

// Get regions by major option id
router.get('/regions/:option_id', chatbotController.getRegionsByOption);

// Beach routes
router.get('/beach-types/:region_id', chatbotController.getBeachTypesByRegion);
router.get('/beaches/:type_id', chatbotController.getBeachesByType);

// Wildlife routes (new)
router.get('/wildlife-types/:region_id', chatbotController.getWildlifeTypesByRegion);
router.get('/wildlife-places/:type_id', chatbotController.getWildlifePlacesByType);

export default router;
