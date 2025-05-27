// frontend/services/feedbackService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

// Submit feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, feedbackData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error submitting feedback' };
  }
};

// Optional: get all feedback (if needed)
export const getAllFeedback = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error fetching feedbacks' };
  }
};
