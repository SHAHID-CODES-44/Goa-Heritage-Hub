import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/faqs'; // adjust if your backend is hosted elsewhere

// Get all FAQs
export const getFAQs = async () => {
  try {
    const response = await axios.get(API_BASE);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch FAQs:', error);
    return [];
  }
};

// Submit a new FAQ
export const submitFAQ = async (question) => {
  try {
    const response = await axios.post(API_BASE, { question });
    return response.data;
  } catch (error) {
    console.error('Failed to submit FAQ:', error);
    return null;
  }
};
