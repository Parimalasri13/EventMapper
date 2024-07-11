import React from 'react';
import { useParams } from 'react-router-dom';
import myths from './myths';
import './EventPage.css';

const EventPage = () => {
    const { mythName } = useParams();
    const myth = myths.find(m => m.link === `/${mythName}`);
    
    return (
        <div className="event-page">
            <h1 className="heading">{myth.ques} Events</h1>
            <div className="events-container">
                {myth.events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <h2>{event.name}</h2>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">More Info</a> {/* Opens link in a new tab */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
