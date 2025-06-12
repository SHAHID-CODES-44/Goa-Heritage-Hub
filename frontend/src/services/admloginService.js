// frontend/src/services/admloginService.js
import axios from 'axios';

export const loginAdmin = async ({ username, password }) => {
  const response = await axios.post('http://localhost:5000/api/admin/login', {
    username,
    password,
  });
  return response.data;
};
