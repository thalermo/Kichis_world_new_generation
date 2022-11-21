import React from 'react';
import "./thumbsButton.css"

function ThumbsButton(props) {
  return (
    <button
      onClick={props.action}
      className={
        props.task !== ''
          ? `video-game-button ${props.feedback}`
          : `video-game-button ${props.feedback} hide`
      }
      // falsy value ↩️
      disabled={props.task === ''}
    ></button>
  );
}

export default ThumbsButton;