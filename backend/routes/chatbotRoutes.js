import express from 'express';
import * as chatbotController from '../controllers/chatbotController.js';

const router = express.Router();

// Major options
router.get('/major-options', chatbotController.getMajorOptions);

// Regions by option
router.get('/regions/:option_id', chatbotController.getRegionsByOption);

// Beach-specific routes
router.get('/beach-types/:region_id', chatbotController.getBeachTypesByRegion);
router.get('/beaches/:type_id', chatbotController.getBeachesByType);

// Wildlife-specific routes
router.get('/wildlife-types/:region_id', chatbotController.getWildlifeTypesByRegion);
router.get('/wildlife-places/:type_id', chatbotController.getWildlifePlacesByType);

// Adventure-specific routes (NEW)
router.get('/adventure-types', chatbotController.getAdventureTypes);
router.get('/adventure-places/:type_id', chatbotController.getAdventurePlacesByType);

// StayEats-specific routes (NEW)
router.get('/stayeats-types/:region_id', chatbotController.getStayEatsTypesByRegion);
router.get('/stayeats-places/:type_id', chatbotController.getStayEatsPlacesByType);

export default router;
