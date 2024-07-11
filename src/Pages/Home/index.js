
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling
import styled from 'styled-components';

// Styled-component for the image container
const ImageContainer = styled.div`
  width: 100%;
  height: 570px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
              url('noback.png');
  background-size: cover;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleChatIconClick = () => {
    navigate('/Read');
  };

  return (
    <div className='container'>
      <ImageContainer />
      
      <div className='Description-head'>
        <h2 className='Description'>Don't waste your time on searching, invest it in learning.</h2>
        <ul className='Description2'>
          <li>Comprehensive Event Listings at top IITs, NITs, and IIITs in one place.</li>
          <li>Easy Access to Information by chatting with our chatbot.</li>
          <li>See personalized recommendations based on your selected domain of interest.</li>
        </ul>
      </div>
      <div className='chat-icon' onClick={handleChatIconClick}>
        <i className='fas fa-comments'></i>
      </div>
    </div>
  );
}

export default Home;


