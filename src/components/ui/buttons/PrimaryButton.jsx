import React from 'react';

function PrimaryButton(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleClick}>
      {props.title}
    </button>
  );
}

export default PrimaryButton;