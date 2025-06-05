const API_BASE = 'http://localhost:5000/api/chatbot';

export const getMajorOptions = async () => {
  const res = await fetch(`${API_BASE}/major-options`);
  if (!res.ok) throw new Error('Failed to fetch major options');
  return await res.json();
};

export const getRegionsByOption = async (option_id) => {
  const res = await fetch(`${API_BASE}/regions/${option_id}`);
  if (!res.ok) throw new Error('Failed to fetch regions');
  return await res.json();
};

export const getBeachTypesByRegion = async (region_id) => {
  const res = await fetch(`${API_BASE}/beach-types/${region_id}`);
  if (!res.ok) throw new Error('Failed to fetch beach types');
  return await res.json();
};

export const getBeachesByType = async (type_id) => {
  const res = await fetch(`${API_BASE}/beaches/${type_id}`);
  if (!res.ok) throw new Error('Failed to fetch beaches');
  return await res.json();
};

// Wildlife endpoints
export const getWildlifeTypesByRegion = async (region_id) => {
  const res = await fetch(`${API_BASE}/wildlife-types/${region_id}`);
  if (!res.ok) throw new Error('Failed to fetch wildlife types');
  return await res.json();
};

export const getWildlifePlacesByType = async (type_id) => {
  const res = await fetch(`${API_BASE}/wildlife-places/${type_id}`);
  if (!res.ok) throw new Error('Failed to fetch wildlife places');
  return await res.json();
};

// Adventure endpoints (corrected)
export const getAdventureTypes = async () => {
  const res = await fetch(`${API_BASE}/adventure-types`);
  if (!res.ok) throw new Error('Failed to fetch adventure types');
  return await res.json();
};

export const getAdventurePlacesByType = async (type_id) => {
  const res = await fetch(`${API_BASE}/adventure-places/${type_id}`);
  if (!res.ok) throw new Error('Failed to fetch adventure places');
  return await res.json();
};
