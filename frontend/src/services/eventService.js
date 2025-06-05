const API_BASE = 'http://localhost:5000/api/events'; // Adjust if your backend base URL differs

export const fetchEvents = async () => {
  const response = await fetch(API_BASE);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};

export const fetchEventById = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }
  return response.json();
};

export const createEvent = async (eventData) => {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Error('Failed to create event');
  }
  return response.json();
};

export const updateEvent = async (id, eventData) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Error('Failed to update event');
  }
  return response.json();
};

export const deleteEvent = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete event');
  }
  return response.json();
};
