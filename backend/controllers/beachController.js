import Beach from '../models/beachModel.js';
import { Op } from 'sequelize';

export const getAllBeaches = async (req, res) => {
  try {
    const { search, location } = req.query;

    const where = {};

    if (location) {
      where.location = location; // Exact match filter
    }

    if (search) {
      where.name = { [Op.like]: `%${search}%` }; // Partial search
    }

    const beaches = await Beach.findAll({ where });
    res.status(200).json(beaches);
  } catch (error) {
    console.error('Error fetching beaches:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
