import "./buttons.css"

// export const PlusButton = (props) => {
//   return (

//     <button
//       onClick={props.action}
//       className={
//         props.task !== ''
//           ? 'video-game-button plus-grid plus '
//           : 'video-game-button plus-grid plus hide'
//       }
//       // falsy value ↩️
//       disabled={props.task === ''}
//     ></button>

//   );
// };

// export const MinusButton = (props) => {
//   return (

//     <button
//       onClick={props.action}
//       className={
//         props.task !== ''
//           ? 'video-game-button minus-grid minus '
//           : 'video-game-button minus-grid minus hide'
//       }
//       disabled={props.task === ''}
//     ></button>

//   );
// };

export const SelectButton = () => {
  return (
    <div className="StartButton_container">
      <span className="start-btn">SELECT</span>;
    </div>
  );
};

export const StartButton = () => {
  return <span className="start-btn">START</span>;
};

export const SubmitBtn = () => {
  return <button className="submit-btn ">SUBMIT</button>;
};



export const TodoBtn = (props) => {
  return (
    <button onClick={props.action} className="submit-btn setTasuku">
      SET TASUKU
    </button>
  );
};

export const Exit = (props) => {
  return <div className="exit-image" onClick={props.action} />;
};

export const TurnonBtn = (props) => {
  return <div className="turnon-image" onClick={props.action} />;
};

// Shift to registration page, Login page or Logout from the app 
export const ShifterBtn = (props) => {
  return (
    <div
      className={props.className}
      onClick={props.action}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  );
};


export const BtnPrimary = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.handleClick}>
      {props.title}
    </button>
  )
}