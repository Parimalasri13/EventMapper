import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="About_us_container">
      <header className="About_us_header">
        <h1 className="About_us_head">About Us</h1>
      </header>

      <section className="About_us_about">
        <div className="About_us_text reverse">
          <div className="About_us_title_container">
            <div className="About_us_text_content">
              <h2 className="About_us_subhead">Welcome to EVENT MAPPERS</h2>
              <p className="About_us_content">
                Your ultimate guide to events happening across various NITs (National Institutes of Technology) and IITs (Indian Institutes of Technology) in India. We specialize in bringing you up-to-date information on a wide range of domains, allowing you to explore and participate in events that interest you the most.
              </p>
            </div>
            <img src="woman.png" alt="Icon" className="About_us_title_image" />
          </div>
        </div>
      </section>

      <section className="About_us_how_it_works">
  <div className="About_us_title_container">
    <img src="whats what.jpg" alt="Icon" className="About_us_title_image" />
    <div className="About_us_text_content">
      <h3 className="About_us_subhead">What's What</h3>
      <p className="About_us_content">
        Simply click on any domain above to discover ongoing and upcoming events across different NITs and IITs.
      </p>
      <p className="About_us_content">
        Each event listing provides essential details including:
      </p>
      <ul className="About_us_content">
        <li>Event Name</li>
        <li>Date of Event</li>
        <li>Location</li>
        <li>Link to Detailed Event Information</li>
      </ul>
    </div>
  </div>
</section>


      <section className="get-involved">
        <div className="About_us_text reverse">
          <div className="About_us_title_container">
            <div className="About_us_text_content">
              <h2 className="About_us_subhead">Get Involved</h2>
              <p className="About_us_content">
              Whether you're a student looking to participate, an enthusiast eager to explore new innovations, or simply interested in the vibrant campus cultures of NITs and IITs, "EVENT MAPPER" is your go-to resource. Explore, engage, and stay updated with the latest happenings across India's premier technical and cultural institutions. Join us in celebrating knowledge, creativity, and collaboration!
              </p>
            </div>
            <img src="getinvolve.jpg" alt="Icon" className="About_us_title_image" />
          </div>
        </div>
        
      </section>

      <section className="About_us_centralized_platform">
  <div className="About_us_title_container">
    <img src="centralized.jpg" alt="Icon" className="About_us_title_image" />
    <div className="About_us_text_content">
      <h3 className="About_us_subhead">Centralized Platform</h3>
      <p className="About_us_content">
      We provide a centralized platform where you can easily access detailed event descriptions directly from the respective NIT and IIT pages. This ensures you get comprehensive information about the event, its schedule, participating teams, and much more.
      </p>
    </div>
  </div>
</section>


      <footer className="About_us_footer">
        <p className="About_us_content">Let's hack the future, one competition at a time. Welcome to EVENT MAPPER!</p>
      </footer>
    </div>
  );
};

export default AboutUs;

