import React, { useState, useEffect } from 'react';
import DailySchedule from './DailySchedule';

const Home = () => {
  const [reminders, setReminders] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [medicineTime, setMedicineTime] = useState('');

  const handleAddReminder = () => {
    if (medicineName && medicineTime) {
      const newReminder = {
        id: new Date().getTime(),
        name: medicineName,
        time: medicineTime
      };
      setReminders([...reminders, newReminder]);
      setMedicineName('');
      setMedicineTime('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      reminders.forEach(reminder => {
        if (reminder.time === currentTime) {
          alert(`It's time to take ${reminder.name}!`);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [reminders]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Medicine Reminder</h2>
      <div className="form-group">
        <label htmlFor="medicineName">Medicine Name:</label>
        <input type="text" className="form-control" id="medicineName" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="medicineTime">Medicine Time:</label>
        <input type="time" className="form-control" id="medicineTime" value={medicineTime} onChange={(e) => setMedicineTime(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleAddReminder}>Add Reminder</button>

      {reminders.length > 0 && (
        <div className="mt-4">
          <h3>Reminders:</h3>
          <ul className="list-group">
            {reminders.map(reminder => (
              <li key={reminder.id} className="list-group-item">
                <span className="mr-2">{reminder.name}</span>
                <span className="badge badge-primary">{reminder.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <DailySchedule/>
    </div>
  );
};

export default Home;
