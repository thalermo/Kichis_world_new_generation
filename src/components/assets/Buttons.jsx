import './Buttons.css';

export const PlusButton = (props) => {
  return (
    <div className="plus-minus--buttons">
      <button
        onClick={props.action}
        className={
          props.task !== ''
            ? 'video-game-button plus-grid plus '
            : 'video-game-button plus-grid plus hide'
        }
        // falsy value ↩️
        disabled={props.task === ''}
      ></button>
    </div>
  );
};

export const MinusButton = (props) => {
  return (
    <div className="plus-minus--buttons ">
      <button
        onClick={props.action}
        className={
          props.task !== ''
            ? 'video-game-button minus-grid minus '
            : 'video-game-button minus-grid minus hide'
        }
        disabled={props.task === ''}
      ></button>
    </div>
  );
};

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

export const Tasuku = (props) => {
  return (
    <button
      onClick={props.action}
      className={props.task === '' ? 'submit-btn' : 'submit-btn hide'}
      //todo: check this enter ID. i don't know what is doing but it shift the layout down
      id="enter"
      disabled={props.task !== ''}
    >
      TASUKU
    </button>
  );
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

export const RegBtn = (props) => {
  return (
    <div
      className="reg-btn"
      onClick={props.action}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  );
};

export const LogInIcon = (props) => {
  return (
    <div
      className="logInIcon"
      onClick={props.action}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  );
};

export const ReturnIcon = (props) => {
  return (
    <div
      className="returnIcon"
      onClick={props.action}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  );
};
