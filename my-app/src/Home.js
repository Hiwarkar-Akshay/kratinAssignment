import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [age, setAge] = useState('');

  const handleAddReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, newReminder]);
      setNewReminder('');
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const agePrecautions = {
    '50-70': [
      'Regular exercise to maintain strength and flexibility',
      'Eat a balanced diet rich in nutrients',
      'Stay hydrated',
      'Get enough sleep',
      'Manage stress levels',
    ],
    // Add more age ranges and corresponding precautions if needed
  };

  const precautions = agePrecautions[age] || [];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Pill Reminder</h2>

      {/* Reminder Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Add Reminder</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a reminder"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleAddReminder}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reminder List */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Reminders</h5>
          {reminders.length > 0 ? (
            <ul className="list-group">
              {reminders.map((reminder, index) => (
                <li className="list-group-item" key={index}>
                  {reminder}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reminders added.</p>
          )}
        </div>
      </div>

      {/* Age Precautions */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Precautions for Age {age}</h5>
          <div>
            {precautions.length > 0 ? (
              <ul>
                {precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            ) : (
              <p>No precautions available for this age range.</p>
            )}
          </div>
        </div>
      </div>

      {/* Age Input */}
      <div className="mt-4">
        <label htmlFor="ageInput">Enter Your Age:</label>
        <input
          type="number"
          id="ageInput"
          className="form-control"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
        />
      </div>
    </div>
  );
};

export default Home;
