import Feedback from '../models/feedbackModel.js';

// Submit feedback
export const submitFeedback = async (req, res) => {
  const { name, email, contact, feedback } = req.body;

  if (!name || !email || !contact || !feedback) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newFeedback = await Feedback.create({ name, email, contact, feedback });
    res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

// Get all feedbacks
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ message: 'Error fetching feedbacks', error: error.message });
  }
};
