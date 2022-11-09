//! READY TO USE, waiting for routing
import './Registration.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogInIcon } from './assets/Buttons';
//import welcome from './bubble_texts/welcome_text';

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const [eUserName, setEUserName] = useState('');
  const [eEmail, setEEmail] = useState('');
  const [ePassword, setEPassword] = useState('');
  const [eConPassword, setEConPassword] = useState('');

  const [uColor, setUColor] = useState('');
  const [eColor, setEColor] = useState('');
  const [pColor, setPColor] = useState('');
  const [conPcolor, setConPcolor] = useState('');

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // user health points
  const healthPoints = 5;
  //const [status, setStatus] = useState('');

  // declaring a new user object
  // const [newUser, setNewUser] = useState({});

  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  const validate = () => {
    console.log(userName, email, password, conPassword);

    if (userName.length > 1) {
      setEUserName('');
      setUColor('green');
    } else {
      setEUserName('Username must contain at least 8 characters');
      setUColor('red');
    }

    if (email.includes('@') && email.includes('.com')) {
      setEEmail('');
      setEColor('green');
    } else {
      setEEmail('Must be a valid email address');
      setEColor('red');
    }
    // Change it again
    if (password.length > 4) {
      setEPassword('');
      setPColor('green');
    } else {
      setEPassword('Please enter a password with at least 8 digits');
      setPColor('red');
    }

    if (password !== '' && password === conPassword) {
      setEConPassword('');
      setConPcolor('green');
    } else {
      setEConPassword('Passwords not matched');
      setConPcolor('red');
    }
  };

  //console.log(status);

  const registerUser = (event) => {
    event.preventDefault();
    if (
      uColor === 'green' &&
      eColor === 'green' &&
      pColor === 'green' &&
      conPcolor === 'green'
    ) {
      const today = new Date();
      const registrationDate =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDay() + 1);

      let myUser = {
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
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      //! push the information to the last property in the welcome array
      users.push(myUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration is successful');
      navigate('/');
    } else {
      console.log('not ready to login ');
    }
  };

  //! LogIn Icon with onmouseover, Out, action etc.
  const [isMouseOver, setMouseOver] = useState(false);
  const handleLogInEntry = () => {
    navigate('/');
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="reg">
      <div className=" frame reg">
        <div id="bubbleReg" className="bubble_speech_bg">
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
        </div>

        <div className="brand-logo pixel-border"></div>
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
        <LogInIcon
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
