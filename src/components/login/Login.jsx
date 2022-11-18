// Style Sheets:
import "./login.css";

// React liberties 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// importing the login button
import { BtnPrimary, ShifterBtn } from '../assets/Buttons';


function Login() {

  // states of the login information 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // boolean state - show the prompt in the bubble chat 
  const [show, setShow] = useState(false);

  // boolean state -  Mouseover change the prompt in the bubble chat 
  const [isMouseHover, setMouseHover] = useState(false);

  // React routing - Navigation 
  const navigate = useNavigate();

  // Creating 2 empty variables 
  let currentUser;
  let currentUserHP;

  // Timer 8 sec to change the prompt to login instruction!
  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  const handleLogin = () => {

    // ### localStorage ####
    // getting the item from the localStorage and convert it to JS syntax
    // this item has been created in the registration page
    const users = JSON.parse(localStorage.getItem('users'));

    // Using the For of loop, optional since the ES6
    // Looping through all the users to find a match with the user & the password
    //it's true, then iterate by one and show me the message
    let i = 0;
    for (let el of users) {
      if (el.email === email && el.password === password) {
        i++;
      }
    }

    //### START CONDITION to login to the Dashboard ####
    //if the variable i ==== 1, it means that there is a match with the login and the password 

    if (i === 1) {

      // ### LocalStorage ###
      // 1.  set 2 new items in the localStorage
      alert('Login Successful');
      localStorage.setItem('loggedIn', 'yes');
      localStorage.setItem('currentUser', email);

      // 2. Set the time after the login
      const today = new Date();
      const currentTime =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDay() + 1);

      // ### LocalStorage ###
      // 3. Get the user item,  currentUser and convert it to js 
      let localEntry = JSON.parse(localStorage.getItem('users'));
      let currentUserEntry = localStorage.getItem('currentUser');

      // 4. Using fine index to find the position of the users email in the array 
      // in order to add read and add information 
      //getting the index number
      let index = localEntry.findIndex(
        (element) => element.email === currentUserEntry
      );

      // 5. Add another property to the existing object in the index position
      // currentTime is the timeStamp of the login 
      localEntry[index] = {
        ...localEntry[index],
        time: currentTime,
        //hp: currentUserHP,
      };

      // ### localStorage ### 
      // 6. Replace the item users with the new information (the currentTime property)
      localStorage.setItem('users', JSON.stringify(localEntry));

      //######## STOP HERE ######## I'm not sure what is the purpose of having the info here, checking later ///

      // getting the info of the user from the local Storage
      //todo: why I can't update the state
      currentUser = localEntry[index].userName;
      //! access to HP value in the local storage
      currentUserHP = localEntry[index].hp;
      // console.log(currentUser);
      // console.log(localEntry);
      // console.log(currentUserEntry);

      //localStorage.setItem('users', JSON.stringify(localEntry));

      // setUserName(currentUser);
      // console.log(userName);

      //######## STOP HERE ######## I'm not sure what is the purpose of having the info here, checking later ///

      // 7. Using react routing to navigate to the dashboard 
      navigate('/dash');

      // if there is not a match (let i !== 1) then show a prompt of invalid login 
    } else {
      alert('Invalid Login');
    }
  };

  //### END CONDITION to login to the Dashboard ####

  // HandleClick by clicking on the addUser icon
  const handleRegisterEntry = () => {
    navigate('/reg');
  };

  // Set the states by hover with the mouse on the addUser icon 
  const handleMouseOver = () => {
    setMouseHover(true);
  };

  const handleMouseOut = () => {
    setMouseHover(false);
  };

  return (
    <div className="page-container login-page">
      {/* <div className=" frame home"> */}
      <div className=" form-container login-form">
        <div className="prompt__bubble-speech login-page">

          {/* when the page loaded, both states are false */}
          {!show && !isMouseHover && (
            <h1 className="type_effect title ">Welcome to Kichi's World!</h1>
          )}

          {/* userEffect & setInterval change the state after 8 sec */}
          {show && !isMouseHover && (
            <h1 className="type_effect title ">Login to get started</h1>
          )}

          {/* isMouseHover? change the prompt in the bubble chat  */}
          {isMouseHover && (
            <h1 className="type_effect title ">
              Click on this button to sign up!
            </h1>
          )}
        </div>

        <div className="form-inputs-box ">
          <div className="input-field ">
            <input
              type="text"
              placeholder="email"
              className="form__input"
              // style={{ borderColor: eColor }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <small>{eEmail}</small> */}
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="password"
              className="form__input"
              // style={{ borderColor: pColor }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <small>{ePassword}</small> */}
          </div>

          <div className="input-field">
            <BtnPrimary className="primary-btn login-btn"
              handleClick={handleLogin}
              title="LOGIN"
            />
          </div>
        </div>
        <ShifterBtn
          action={handleRegisterEntry}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          isMouseOver={isMouseHover}
          setMouseOver={setMouseHover}
          className="shifter-btn reg-icon"
        />
      </div>
    </div>
  );
}

export default Login;
