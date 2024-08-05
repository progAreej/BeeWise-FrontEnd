import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // You can handle date selection here (e.g., fetch events for the selected date)
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected Date</h3>
          <p className="text-xl">{date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar1;
