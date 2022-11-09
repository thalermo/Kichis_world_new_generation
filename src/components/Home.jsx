//! READY TO USE, waiting for routing

import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RegBtn } from './assets/Buttons';

//import welcome from './bubble_texts/welcome_text';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const navigate = useNavigate();
  let currentUser;
  let currentUserHP;

  useEffect(() => {
    setInterval(() => setShow(true), 8000);
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('loggedIn');

  //   alert('click');
  // };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    // start to write a loop like js6 for of!
    let i = 0;
    for (let user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }

    // if it's true, then iterate by one and show me the message
    if (i === 1) {
      alert('Login Successful');
      localStorage.setItem('loggedIn', 'yes');
      localStorage.setItem('currentUser', email);

      // Set the time after the login
      const today = new Date();
      const currentTime =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDay() + 1);

      let localEntry = JSON.parse(localStorage.getItem('users'));
      let currentUserEntry = localStorage.getItem('currentUser');
      //currentUserHP = 4;

      //getting just number
      let index = localEntry.findIndex(
        (element) => element.email === currentUserEntry
      );

      localEntry[index] = {
        ...localEntry[index],
        time: currentTime,
        //hp: currentUserHP,
      };

      localStorage.setItem('users', JSON.stringify(localEntry));

      // getting the info of the user from the local Storage
      //todo: why I can't update the state
      currentUser = localEntry[index].userName;
      //! access to HP value in the local storage
      currentUserHP = localEntry[index].hp;
      console.log(currentUser);
      console.log(currentUserHP);
      localStorage.setItem('users', JSON.stringify(localEntry));

      // setUserName(currentUser);
      // console.log(userName);

      navigate('/dash');
    } else {
      alert('Invalid Login');
    }
  };

  const handleRegisterEntry = () => {
    navigate('/reg');
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="home ">
      <div className=" frame home">
        <div className="bubble_home ">
          {!show && !isMouseOver && (
            <h1 className="type_effect title ">Welcome to Kichi's World!</h1>
          )}
          {show && !isMouseOver && (
            <h1 className="type_effect title ">Login to get started</h1>
          )}
          {isMouseOver && (
            <h1 className="type_effect title ">
              Click on this button to sign up!
            </h1>
          )}
        </div>

        <div className="form-inputs ">
          <div className="input-field ">
            <input
              type="text"
              placeholder="email"
              className="form-input"
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
              className="form-input"
              // style={{ borderColor: pColor }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <small>{ePassword}</small> */}
          </div>

          <div className="input-field">
            <button className="submit-btn login" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
        <RegBtn
          action={handleRegisterEntry}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          isMouseOver={isMouseOver}
          setMouseOver={setMouseOver}
        />
      </div>
    </div>
  );
};

export default Home;
