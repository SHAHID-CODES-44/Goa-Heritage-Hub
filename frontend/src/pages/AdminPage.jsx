import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  getAdventures,
  createAdventure,
  updateAdventure,
  deleteAdventure,
  getBeaches,
  createBeach,
  updateBeach,
  deleteBeach
} from '../services/adminService';
import './Admin.css';

const AdminPage = () => {
  // --- Adventures state ---
  const [adventures, setAdventures] = useState([]);
  const [adventureForm, setAdventureForm] = useState({
    title: '',
    description: '',
    image_path: '',
    direction_url: ''
  });
  const [adventureEditingId, setAdventureEditingId] = useState(null);

  // --- Beaches state ---
  const [beaches, setBeaches] = useState([]);
  const [beachForm, setBeachForm] = useState({
    name: '',
    location: '',
    description: '',
    image: '',
    rating: '',
    directions_url: ''
  });
  const [beachEditingId, setBeachEditingId] = useState(null);

  // --- Shared states ---
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch adventures and beaches on mount
  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const [advData, beachData] = await Promise.all([getAdventures(), getBeaches()]);
      setAdventures(advData);
      setBeaches(beachData);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // --- Handlers for adventure form ---
  const handleAdventureChange = (e) => {
    setAdventureForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdventureSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      if (adventureEditingId) {
        await updateAdventure(adventureEditingId, adventureForm);
        setSuccess('Adventure updated successfully!');
      } else {
        await createAdventure(adventureForm);
        setSuccess('Adventure created successfully!');
      }
      await fetchAll();
      setAdventureForm({ title: '', description: '', image_path: '', direction_url: '' });
      setAdventureEditingId(null);
    } catch (err) {
      setError(err.message || 'Error saving adventure.');
    }
  };

  const handleAdventureEdit = (adv) => {
    setAdventureForm({
      title: adv.title,
      description: adv.description,
      image_path: adv.image_path,
      direction_url: adv.direction_url
    });
    setAdventureEditingId(adv.adventure_id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdventureDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this adventure?')) return;
    try {
      await deleteAdventure(id);
      setSuccess('Adventure deleted successfully!');
      await fetchAll();
    } catch (err) {
      setError(err.message || 'Failed to delete adventure.');
    }
  };

  // --- Handlers for beach form ---
  const handleBeachChange = (e) => {
    setBeachForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBeachSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      // Convert rating to float to avoid type issues
      const formPayload = { ...beachForm, rating: parseFloat(beachForm.rating) || 0 };
      if (beachEditingId) {
        await updateBeach(beachEditingId, formPayload);
        setSuccess('Beach updated successfully!');
      } else {
        await createBeach(formPayload);
        setSuccess('Beach created successfully!');
      }
      await fetchAll();
      setBeachForm({ name: '', location: '', description: '', image: '', rating: '', directions_url: '' });
      setBeachEditingId(null);
    } catch (err) {
      setError(err.message || 'Error saving beach.');
    }
  };

  const handleBeachEdit = (beach) => {
    setBeachForm({
      name: beach.name,
      location: beach.location,
      description: beach.description,
      image: beach.image,
      rating: beach.rating ? beach.rating.toString() : '',
      directions_url: beach.directions_url
    });
    setBeachEditingId(beach.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBeachDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this beach?')) return;
    try {
      await deleteBeach(id);
      setSuccess('Beach deleted successfully!');
      await fetchAll();
    } catch (err) {
      setError(err.message || 'Failed to delete beach.');
    }
  };

  // Clear notifications after 5 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <div className="admin-container">

      {/* Adventure Management Section */}
      <h1 className="admin-title">Admin Adventure Management</h1>

      {/* Notifications */}
      {error && <div className="alert alert-error"><span className="close-btn" onClick={() => setError(null)}>&times;</span>{error}</div>}
      {success && <div className="alert alert-success"><span className="close-btn" onClick={() => setSuccess(null)}>&times;</span>{success}</div>}

      {/* Adventure Form */}
      <form onSubmit={handleAdventureSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" className="form-input" placeholder="Enter adventure title" value={adventureForm.title} onChange={handleAdventureChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" className="form-textarea" placeholder="Enter adventure description" rows={4} value={adventureForm.description} onChange={handleAdventureChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image_path">Image URL</label>
          <input id="image_path" name="image_path" className="form-input" placeholder="Enter image URL" value={adventureForm.image_path} onChange={handleAdventureChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="direction_url">Directions URL</label>
          <input id="direction_url" name="direction_url" className="form-input" placeholder="Enter directions URL" value={adventureForm.direction_url} onChange={handleAdventureChange} required />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-button primary-button">
            {adventureEditingId ? (<><i className="fas fa-save"></i> Update Adventure</>) : (<><i className="fas fa-plus"></i> Add Adventure</>)}
          </button>
          {adventureEditingId && (
            <button type="button" className="form-button secondary-button" onClick={() => {
              setAdventureEditingId(null);
              setAdventureForm({ title: '', description: '', image_path: '', direction_url: '' });
            }}>
              <i className="fas fa-times"></i> Cancel
            </button>
          )}
        </div>
      </form>

      {/* Adventure List */}
      <div className="adventures-list">
        <h2 className="section-title"><i className="fas fa-map-marked-alt"></i> Current Adventures</h2>
        {loading ? (
          <div className="loading-state"><i className="fas fa-spinner fa-spin"></i><p>Loading adventures...</p></div>
        ) : adventures.length === 0 ? (
          <div className="empty-state"><i className="fas fa-map"></i><p>No adventures found. Add one to get started!</p></div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Directions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adventures.map(adv => (
                <tr key={adv.adventure_id}>
                  <td>{adv.title}</td>
                  <td className="description-cell">{adv.description.length > 100 ? `${adv.description.substring(0, 100)}...` : adv.description}</td>
                  <td>
                    {adv.image_path && (
                      <a href={adv.image_path} target="_blank" rel="noopener noreferrer" className="image-link">
                        <i className="fas fa-image"></i> View
                      </a>
                    )}
                  </td>
                  <td>
                    <a href={adv.direction_url} target="_blank" rel="noopener noreferrer" className="direction-link">
                      <i className="fas fa-directions"></i> Directions
                    </a>
                  </td>
                  <td className="actions-cell">
                    <button onClick={() => handleAdventureEdit(adv)} className="action-button edit-button" title="Edit"><i className="fas fa-edit"></i></button>
                    <button onClick={() => handleAdventureDelete(adv.adventure_id)} className="action-button delete-button" title="Delete"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Spacer */}
      <br />
      <br />

      {/* Beach Management Section */}
      <h1 className="admin-title">Admin Beach Management</h1>

      {/* Beach Form */}
      <form onSubmit={handleBeachSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="form-input" placeholder="Enter beach name" value={beachForm.name} onChange={handleBeachChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" className="form-input" placeholder="Enter location (e.g. North Goa)" value={beachForm.location} onChange={handleBeachChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" className="form-textarea" placeholder="Enter description" rows={4} value={beachForm.description} onChange={handleBeachChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input id="image" name="image" className="form-input" placeholder="Enter image URL" value={beachForm.image} onChange={handleBeachChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input id="rating" name="rating" type="number" step="0.1" min="0" max="5" className="form-input" placeholder="Enter rating (0-5)" value={beachForm.rating} onChange={handleBeachChange} />
        </div>
        <div className="form-group">
          <label htmlFor="directions_url">Directions URL</label>
          <input id="directions_url" name="directions_url" className="form-input" placeholder="Enter directions URL" value={beachForm.directions_url} onChange={handleBeachChange} />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-button primary-button">
            {beachEditingId ? (<><i className="fas fa-save"></i> Update Beach</>) : (<><i className="fas fa-plus"></i> Add Beach</>)}
          </button>
          {beachEditingId && (
            <button type="button" className="form-button secondary-button" onClick={() => {
              setBeachEditingId(null);
              setBeachForm({ name: '', location: '', description: '', image: '', rating: '', directions_url: '' });
            }}>
              <i className="fas fa-times"></i> Cancel
            </button>
          )}
        </div>
      </form>

      {/* Beaches List */}
      <div className="beaches-list">
        <h2 className="section-title"><i className="fas fa-water"></i> Current Beaches</h2>
        {loading ? (
          <div className="loading-state"><i className="fas fa-spinner fa-spin"></i><p>Loading beaches...</p></div>
        ) : beaches.length === 0 ? (
          <div className="empty-state"><i className="fas fa-umbrella-beach"></i><p>No beaches found. Add one to get started!</p></div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Image</th>
                <th>Rating</th>
                <th>Directions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {beaches.map(beach => (
                <tr key={beach.id}>
                  <td>{beach.name}</td>
                  <td>{beach.location}</td>
                  <td className="description-cell">{beach.description.length > 100 ? `${beach.description.substring(0, 100)}...` : beach.description}</td>
                  <td>
                    {beach.image && (
                      <a href={beach.image} target="_blank" rel="noopener noreferrer" className="image-link">
                        <i className="fas fa-image"></i> View
                      </a>
                    )}
                  </td>
                  <td>{beach.rating}</td>
                  <td>
                    <a href={beach.directions_url} target="_blank" rel="noopener noreferrer" className="direction-link">
                      <i className="fas fa-directions"></i> Directions
                    </a>
                  </td>
                  <td className="actions-cell">
                    <button onClick={() => handleBeachEdit(beach)} className="action-button edit-button" title="Edit"><i className="fas fa-edit"></i></button>
                    <button onClick={() => handleBeachDelete(beach.id)} className="action-button delete-button" title="Delete"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default AdminPage;
