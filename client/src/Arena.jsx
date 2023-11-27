import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [day, setDay] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [entries, setEntries] = useState([]);
  const [editingEntryId, setEditingEntryId] = useState(null);

  useEffect(() => {
    // Fetch all entries when the component mounts
    axios.get('http://localhost:3001/arena')
      .then((response) => {
        setEntries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching entries:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEntryId) {
      // Update the entry if editing
      axios.put(`http://localhost:3001/arena/${editingEntryId}`, { day, exerciseName })
        .then((response) => {
          setEntries(entries.map(entry => (entry._id === editingEntryId ? response.data : entry)));
          setEditingEntryId(null);
        })
        .catch((error) => {
          console.error('Error updating entry:', error);
        });
    } else {
      // Save the entry to the server
      axios.post('http://localhost:3001/arena', { day, exerciseName })
        .then((response) => {
          setEntries([...entries, response.data]);
          setDay('');
          setExerciseName('');
        })
        .catch((error) => {
          console.error('Error saving entry:', error);
        });
    }
  };

  const handleEdit = (entryId) => {
    const entryToEdit = entries.find(entry => entry._id === entryId);
    setDay(entryToEdit.day);
    setExerciseName(entryToEdit.exerciseName);
    setEditingEntryId(entryId);
  };

  const handleDelete = (entryId) => {
    // Delete the entry from the server
    axios.delete(`http://localhost:3001/arena/${entryId}`)
      .then(() => {
        setEntries(entries.filter(entry => entry._id !== entryId));
      })
      .catch((error) => {
        console.error('Error deleting entry:', error);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h1 className="mb-4">Exercise Tracker</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="day" className="form-label">Day:</label>
          <input
            type="text"
            className="form-control"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exerciseName" className="form-label">List the Exercises:</label>
          <input
            type="text"
            className="form-control"
            id="exerciseName"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingEntryId ? 'Update Entry' : 'Add Entry'}
        </button>
      </form>

      <div className="mt-4">
        <h2>Exercise Entries</h2>
        <ul className="list-group">
          {entries.map((entry) => (
            <li key={entry._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Day:</strong> {entry.day}, <strong>List of exercises:</strong> {entry.exerciseName}
              </div>
              <div>
                <button onClick={() => handleEdit(entry._id)} className="btn btn-warning me-2">Edit</button>
                <button onClick={() => handleDelete(entry._id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
