import React from 'react';

const DailySchedule = () => {
  const ageGroup = '50 to 70';

  const schedule = [
    { time: '08:00 AM', activity: 'Morning Walk' },
    { time: '09:00 AM', activity: 'Breakfast' },
    { time: '10:00 AM', activity: 'Yoga or Exercise' },
    { time: '12:00 PM', activity: 'Lunch' },
    { time: '03:00 PM', activity: 'Nap or Rest' },
    { time: '05:00 PM', activity: 'Socialize or Hobbies' },
    { time: '07:00 PM', activity: 'Dinner' },
    { time: '09:00 PM', activity: 'Relaxation or Reading' },
    { time: '10:00 PM', activity: 'Bedtime' }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Daily Schedule for Age {ageGroup}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(item => (
            <tr key={item.time}>
              <td>{item.time}</td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailySchedule;
