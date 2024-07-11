import React, { useState } from 'react';
import './Slokas.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatHistories, setChatHistories] = useState([]);
  const [activeChat, setActiveChat] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { type: 'user', text: input }];
      setMessages(newMessages);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { type: 'bot', text: 'This is a bot response to: ' + input };
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, botResponse];
          updateChatHistory(updatedMessages);
          return updatedMessages;
        });
      }, 1000);
    }
  };

  const updateChatHistory = (updatedMessages) => {
    setChatHistories((prevHistories) => {
      const newHistories = [...prevHistories];
      newHistories[activeChat] = updatedMessages;
      return newHistories;
    });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleNewChat = () => {
    setChatHistories((prevHistories) => [...prevHistories, []]);
    setActiveChat(chatHistories.length);
    setMessages([]);
  };

  const handleChatSelection = (index) => {
    setActiveChat(index);
    setMessages(chatHistories[index]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="chat_container">
      <div className="chat_sidebar">
        <button onClick={handleNewChat} className="new_chat_button">New Chat</button>
        {chatHistories.map((history, index) => (
          <div
            key={index}
            className={`chat_history_item ${activeChat === index ? 'active' : ''}`}
            onClick={() => handleChatSelection(index)}
          >
            Chat {index + 1}
          </div>
        ))}
      </div>
      <div className="chat_body">
        <div className="chat_bot_container">
          <div className="chat_bot_header">
            Chatbot
            <div className="theme_switch">
              {theme === 'light' ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
              <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="chat_bot_messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat_bot_message ${message.type}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat_bot_input_container">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your question here..."
              className="chat_bot_input"
            />
            <button onClick={handleSend} className="chat_bot_send_button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
