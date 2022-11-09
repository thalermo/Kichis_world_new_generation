// import welcome from "./bubble_texts/welcome_text";

import '../Dashboard.css';
import React, { useState, useEffect } from 'react';

function BubbleKichi(props) {
  const [counter, setCounter] = useState(0);
  // const [indexCounter, setIndexCounter] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // const handleClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   console.log('click');
  // };

  // (render)
  return (
    <div className="bubble_speech--dash">
      {counter <= 1 && props.now === props.regDate && (
        <div className="type_effect--dash">{props.text[counter].phrase[0]}</div>
      )}

      {counter <= 1 && props.now !== props.regDate && (
        <div className="type_effect--dash">{props.text[counter].phrase[1]}</div>
      )}

      {props.indexCounter >= 2 && props.now === props.regDate && (
        <div className="type_effect--dash">
          {props.text[props.indexCounter].phrase[0]}
        </div>
      )}

      {props.indexCounter >= 2 && props.now !== props.regDate && (
        <div className="type_effect--dash">
          {props.text[props.indexCounter].phrase[1]}
        </div>
      )}

      {props.indexCounter >= 2 && props.now !== props.regDate && (
        <div className="type_effect--dash">
          {props.text[props.indexCounter].phrase[1]}
        </div>
      )}
    </div>
  );
}

export default BubbleKichi;
