import express from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

// GET all events
router.get('/', getAllEvents);

// GET event by ID
router.get('/:id', getEventById);

// POST create new event
router.post('/', createEvent);

// PUT update event
router.put('/:id', updateEvent);

// DELETE event
router.delete('/:id', deleteEvent);

export default router;
