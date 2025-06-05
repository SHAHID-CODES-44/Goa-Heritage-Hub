import Event from '../models/eventModel.js';

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new event
export const createEvent = async (req, res) => {
  const { image_path, description, directions_url } = req.body;
  try {
    const newEvent = await Event.create({ image_path, description, directions_url });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { image_path, description, directions_url } = req.body;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.update({ image_path, description, directions_url });
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.destroy();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
