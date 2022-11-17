// CSS Stylesheets
import './registration.css';
import { LogInIcon, ShifterIcon } from '../assets/Buttons';

// React libraries 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Registration() {

  // States for the registration information 
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  // states for the error messages (e = error message)  
  const [eUserName, setEUserName] = useState('');
  const [eEmail, setEEmail] = useState('');
  const [ePassword, setEPassword] = useState('');
  const [eConPassword, setEConPassword] = useState('');


  console.log(eUserName);
  // States from the valid or error colors 
  // (u = user, e = email, p = password, conP = confirm Password)
  const [uColor, setUColor] = useState('');
  const [eColor, setEColor] = useState('');
  const [pColor, setPColor] = useState('');
  const [conPcolor, setConPcolor] = useState('');

  // boolean state 
  const [show, setShow] = useState(false);

  // React router property 
  const navigate = useNavigate();

  // user health points, starting points variable 
  const healthPoints = 5;

  // Timer - 8 sec for the prompt instruction in the bubble text 
  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  // Validation function of the entered by the user information in the inputs 
  const validate = () => {
    console.log(userName, email, password, conPassword);

    // #### conditions for the form validation 
    // 1. user name 
    if (userName.length > 1) {
      setEUserName('');
      setUColor('green');
    } else {
      setEUserName('Username must contain at least 8 characters');
      setUColor('red');
    }

    // 2. email
    if (email.includes('@') && email.includes('.com')) {
      setEEmail('');
      setEColor('green');
    } else {
      setEEmail('Must be a valid email address');
      setEColor('red');
    }

    // 3. password
    if (password.length > 4) {
      setEPassword('');
      setPColor('green');
    } else {
      setEPassword('Please enter a password with at least 8 digits');
      setPColor('red');
    }

    // 4. confirm password
    if (password !== '' && password === conPassword) {
      setEConPassword('');
      setConPcolor('green');
    } else {
      setEConPassword('Passwords not matched');
      setConPcolor('red');
    }
  };

  // ### user registrations function 
  const registerUser = (event) => {
    // prevent the form to be rendered 
    event.preventDefault();

    // condition to check the validation process
    // if all the registrations fields are green, new user will be created

    // condition, states ate green? 
    if (
      uColor === 'green' &&
      eColor === 'green' &&
      pColor === 'green' &&
      conPcolor === 'green'
    ) {

      // 1. create a time stamp for the registration date
      const today = new Date();
      const registrationDate =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDay() + 1);

      // 2. create an object of the new user with all the registration data 
      let newUser = {
        userName: userName,
        email: email,
        password: password,
        regDate: registrationDate,
        task: '',
        time: '',
        timeStamp: '',
        hp: healthPoints,
        // conPassword: conPassword,
      };

      // 3. insert the information in the localStorage

      // #### START localStorage ######
      // 1. creating the path and the access for the localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      console.log(users);

      // 2. push to object, (newUser) to the localStorage array, users 
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      // #### END localStorage ######

      // 4. React-route, navigate to the homepage after successfully registered 
      alert('Registration is successful');
      navigate('/');
    } else {
      console.log('not ready to login ');
    }
  };


  // ##### LogIn Icon with onmouseover, Out, action etc.
  // Mouseover change the prompt in the bubble chat 

  // 1. creating a boolean state 
  const [isMouseOver, setMouseOver] = useState(false);

  // 2. mouseover set the state to true 
  const handleMouseOver = () => {
    setMouseOver(true);
  };

  // 3. mouseout set the state to false 
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  // react-route, navigate to the homepage after clicking on the icon 
  const handleLogInEntry = () => {
    navigate('/');
  };


  return (
    <div className="page-container registration-page">

      <div className=" form-container registration-form">

        {/* #### START HEADER FIGURE + PROMPT  */}
        <header id="bubbleReg" className="prompt__bubble-speech registration-page">
          {!show && !isMouseOver && (
            <h1 className="type_effect title">Welcome to Kichi's World!</h1>
          )}
          {show && !isMouseOver && (
            <h1 className="type_effect title">Please fill out the form</h1>
          )}
          {isMouseOver && (
            <h1 className="type_effect title ">
              Click on this button to login!
            </h1>
          )}
          <div className="brand-logo pixel-border" />
        </header>
        {/* #### END HEADER FIGURE + PROMPT  */}

        {/* START FORM CONTAINER */}
        {/* Added the submit form to send data to the local storage   */}
        <form className="form-inputs" onSubmit={registerUser}>
          <div className="input-field">
            <input
              type="text"
              placeholder="name"
              className="form-input"
              style={{ borderColor: uColor }}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <small>{eUserName}</small>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="email"
              className="form-input"
              style={{ borderColor: eColor }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <small>{eEmail}</small>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="password"
              className="form-input"
              style={{ borderColor: pColor }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <small>{ePassword}</small>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="confirm password"
              className="form-input"
              style={{ borderColor: conPcolor }}
              value={conPassword}
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
            />
            <small>{eConPassword}</small>
          </div>
          <div className="input-field">
            <button className="submit-btn reg" onClick={validate}>
              SUBMIT
            </button>
          </div>
        </form>
        <ShifterIcon
          className="logInIcon"
          action={handleLogInEntry}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          isMouseOver={isMouseOver}
          setMouseOver={setMouseOver}
        />
      </div>
    </div>
  );
};

export default Registration;
