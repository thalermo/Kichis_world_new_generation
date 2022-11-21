// Shift to registration page, Login page or Logout from the app 
function ShifterButton(props) {
  return (
    <div
      className={props.className}
      onClick={props.action}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  );
};

export default ShifterButton