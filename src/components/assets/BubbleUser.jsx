// import welcome from "./bubble_texts/welcome_text";
import React, { useState } from 'react';
import './assets/bubbles.css';
import welcome from '../bubble_texts/welcome_text';

function BubbleUser() {
  const [userName, setUserName] = useState('');
  const [userTask, setUserTask] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const getUserName = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  return (
    <div className="bubble_speech_bg">
      <div>
        <input
          placeholder="write here your name..."
          className="user-input"
          type="text"
        />
      </div>
    </div>
  );
}

export default BubbleUser;
