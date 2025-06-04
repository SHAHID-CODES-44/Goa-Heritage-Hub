// frontend/src/services/wildlifeService.js

const API_URL = "http://localhost:5000/api/wildlife";

export const fetchWildlifeList = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch wildlife data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching wildlife:", error);
    throw error;
  }
};
