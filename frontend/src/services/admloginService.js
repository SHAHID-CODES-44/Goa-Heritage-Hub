// frontend/src/services/admlogin/Service.js
const BASE_URL = 'http://localhost:5000/api/admin/login';

export const loginAdmin = async (username, password) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return res.json(); // will contain { token, message }
};
