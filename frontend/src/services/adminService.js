const ADVENTURE_BASE_URL = 'http://localhost:5000/api/admin/adventures';
const BEACH_BASE_URL = 'http://localhost:5000/api/admin/beaches';
const RESTAURANT_BASE_URL = 'http://localhost:5000/api/admin/restaurants';

// Adventure APIs
export const getAdventures = async () => {
  const res = await fetch(ADVENTURE_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch adventures');
  return res.json();
};

export const getAdventureById = async (id) => {
  const res = await fetch(`${ADVENTURE_BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch adventure');
  return res.json();
};

export const createAdventure = async (adventureData) => {
  const res = await fetch(ADVENTURE_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adventureData),
  });
  if (!res.ok) throw new Error('Failed to create adventure');
  return res.json();
};

export const updateAdventure = async (id, adventureData) => {
  const res = await fetch(`${ADVENTURE_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adventureData),
  });
  if (!res.ok) throw new Error('Failed to update adventure');
  return res.json();
};

export const deleteAdventure = async (id) => {
  const res = await fetch(`${ADVENTURE_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete adventure');
  return res.json();
};

// Beach APIs
export const getBeaches = async () => {
  const res = await fetch(BEACH_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch beaches');
  return res.json();
};

export const getBeachById = async (id) => {
  const res = await fetch(`${BEACH_BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch beach');
  return res.json();
};

export const createBeach = async (beachData) => {
  const res = await fetch(BEACH_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(beachData),
  });
  if (!res.ok) throw new Error('Failed to create beach');
  return res.json();
};

export const updateBeach = async (id, beachData) => {
  const res = await fetch(`${BEACH_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(beachData),
  });
  if (!res.ok) throw new Error('Failed to update beach');
  return res.json();
};

export const deleteBeach = async (id) => {
  const res = await fetch(`${BEACH_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete beach');
  return res.json();
};

// 🆕 Restaurant APIs
export const getRestaurants = async () => {
  const res = await fetch(RESTAURANT_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch restaurants');
  return res.json();
};

export const getRestaurantById = async (id) => {
  const res = await fetch(`${RESTAURANT_BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch restaurant');
  return res.json();
};

export const createRestaurant = async (restaurantData) => {
  const res = await fetch(RESTAURANT_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurantData),
  });
  if (!res.ok) throw new Error('Failed to create restaurant');
  return res.json();
};

export const updateRestaurant = async (id, restaurantData) => {
  const res = await fetch(`${RESTAURANT_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurantData),
  });
  if (!res.ok) throw new Error('Failed to update restaurant');
  return res.json();
};

export const deleteRestaurant = async (id) => {
  const res = await fetch(`${RESTAURANT_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete restaurant');
  return res.json();
};
