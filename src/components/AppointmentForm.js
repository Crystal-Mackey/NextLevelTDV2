import React, { useState } from 'react';

const AppointmentForm = ({ date, onAddAppointment }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddAppointment({ name, service, notes, date });
    setName('');
    setService('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Appointment for {date.toDateString()}</h3>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Service" 
        value={service} 
        onChange={(e) => setService(e.target.value)} 
      />
      <textarea 
        placeholder="Notes" 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
