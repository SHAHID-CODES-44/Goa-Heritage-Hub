import Faq from '../models/faqModel.js';

export const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get FAQs' });
  }
};

export const createFaq = async (req, res) => {
  try {
    const { question } = req.body;
    const newFaq = await Faq.create({ question });
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create FAQ' });
  }
};
