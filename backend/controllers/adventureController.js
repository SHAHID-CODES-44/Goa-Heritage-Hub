import Adventure from '../models/adventureModel.js';

export const fetchAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.findAll();
    res.status(200).json(adventures);
  } catch (error) {
    console.error('Error fetching adventures:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
