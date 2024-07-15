import React, { useState } from 'react';
import './EventCollab.css';

const EventCollab = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const openFormWindow = () => {
    const left = window.innerWidth / 2 - 200; // Adjust the values based on your desired window size
    const top = window.innerHeight / 2 - 200;
    const formWindow = window.open('', '_blank', `width=400,height=400,left=${left},top=${top}`);
    // Write HTML content for the new window
    formWindow.document.write(`
      <html>
        <head>
          <title>Event Form</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            label {
              display: block;
              margin-bottom: 10px;
            }
            input {
              width: calc(100% - 20px);
              padding: 10px;
              margin-bottom: 15px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            button {
              background-color: #374152;
              color: #fff;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
            }
            button:hover {
              background-color: #555;
            }
          </style>
        </head>
        <body>
          <h2>Event Details</h2>
          <form id="eventForm" onsubmit="submitForm(event)">
            <label for="eventName">Event Name:</label>
            <input type="text" id="eventName" required>
            <label for="eventDate">Event Date:</label>
            <input type="date" id="eventDate" required>
            <label for="eventLocation">Event Location:</label>
            <input type="text" id="eventLocation" required>
            <button type="submit">Generate URL</button>
            <button type="button" onclick="closeWindow()">Cancel</button>
          </form>
          
          <script>
            function submitForm(event) {
              event.preventDefault();
              const eventName = document.getElementById('eventName').value;
              const eventDate = document.getElementById('eventDate').value;
              const eventLocation = document.getElementById('eventLocation').value;
              const newShowUrl = 'https://yournewvirtualshowlink.com/' + encodeURIComponent(eventName);
              
              // Send data back to main window
              window.opener.postMessage({ eventName, eventDate, eventLocation, newShowUrl }, '*');
              window.close();
            }

            function closeWindow() {
              window.close();
            }
          </script>
        </body>
      </html>
    `);
    
    // Focus the new window
    formWindow.focus();
  };

  // Handle receiving data from the form window
  window.addEventListener('message', (event) => {
    const { eventName, eventDate, eventLocation, newShowUrl } = event.data;
    const newEvent = { name: eventName, date: eventDate, location: eventLocation, url: newShowUrl };
    setEvents([...events, newEvent]);
  });

  return (
    <div className="event-collab" style={{background:'#ffffff40'}}>
      <h2  style={{color:'black'}}>Events and Collaborations</h2>
      <p style={{color:'black'}}>Attend virtual fashion shows and enjoy exclusive influencer collaborations.</p>
      <div className="event-section">
        <div className="virtual-show">
          <h3>Virtual Fashion Show</h3>
          <p>Experience our latest collection in a stunning virtual runway environment.</p>
          <button onClick={() => window.open('https://yourvirtualshowlink.com', '_blank')}>Join Now</button>
        </div>
        <div className="influencer-collab">
          <h3>Influencer Collaboration</h3>
          <p>See how top influencers style our new collection and get exclusive insights.</p>
          <button onClick={() => window.open('https://yourcollaborationlink.com', '_blank')}>Learn More</button>
        </div>
      </div>
      <div className="host-event">
        <h3 >Host Your Own Event</h3>
        <p  style={{color:'black'}}>Click the button below to generate a URL for your own virtual fashion show.</p>
        <button onClick={openFormWindow}>Generate Event URL</button>
      </div>
      {events.length > 0 && (
        <div className="event-list" style={{color:'black'}}>
          <h3>Generated Event URLs:</h3>
          {events.map((event, index) => (
            <div key={index} className="event-item">
              <p style={{color:'black'}}><strong>{event.name}</strong> - {event.date} - {event.location}</p>
              <p>URL: <a href={event.url} target="_blank" rel="noopener noreferrer">{event.url}</a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCollab;