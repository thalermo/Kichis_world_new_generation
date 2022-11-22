// Style Sheets:
import "./dashboard.css";
import "../../ui/buttons/thumbsButton.css"

// React liberties 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//importing script js file with array of objects
import welcome from '../../../utils/welcome_text';

// figure bubble speech above and user bubble underneath the figure
import BubbleKichi from '../../ui/BubbleKichi';

// just the figure with a click function
// the btns components
import { TurnonBtn } from '../../ui/Buttons';

// UI COMPONENTS 
import Kichi from "../../ui/Kichi"
import ThumbsButton from "../../ui/buttons/ThumbsButton"


import {
  getQuote,
  shortQuotes,
  getRandomQuote,
} from "../../../utils/motivationalQuotes"
import PrimaryButton from "../../ui/buttons/PrimaryButton";


function Dashboard() {

  // state for iteration the welcome_text array
  const navigate = useNavigate();
  const [indexCounter, setIndexCounter] = useState(1);

  const [quote, setQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const [status, setStatus] = useState('');
  //const [gameOver, setGameOver] = useState(false);
  // const [updatedPoints, setUpdatedPoints] = useState(false);

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  //! ADD at the end of the project to avoid an access from ppl
  //! ADD at the end of the project to avoid an access from ppl
  //const navigate = useNavigate();
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('loggedIn');
  //   console.log(loggedIn);
  //   if (loggedIn !== 'yes') {
  //     navigate('/');
  //   }
  // }, []);

  // ### LocalsStorage ####
  // get an access to 2 the data in the LS
  let localEntry = JSON.parse(localStorage.getItem('users'));
  let currentUserEntry = localStorage.getItem('currentUser');

  //Using findIndex method to get the position of the current user
  let index = localEntry.findIndex(
    (element) => element.email === currentUserEntry
  );

  // Store the localStorage information in the following variables:
  let task = localEntry[index].task;
  let userName = localEntry[index].userName;
  let currentUserHP = localEntry[index].hp;
  let now = localEntry[index].time;
  let taskTime = localEntry[index].timeStamp;
  let regDate = localEntry[index].regDate;
  //console.log(task, userName, currentUserHP);
  const [hpValue, SetHpValue] = useState(currentUserHP);
  //console.log(currentUserHP);
  console.log(now, taskTime);

  //taskTime = '2001-3-4';
  //* the logic of the show Tasuku btn, if the task is empty and also if the day is over. check line 167 🫡

  // TIME CONDITION: if the login date not equal to the time, that the task has been created, delete the task and send the new info to the localStorage
  if (now !== taskTime) {
    localEntry[index] = {
      ...localEntry[index],
      task: '',
    };
    localStorage.setItem('users', JSON.stringify(localEntry));
    //setShow(false);
  }

  // PROMPT TRIGGER by clicking on the figure 
  const handleFigureClick = () => {
    setIndexCounter((pervValue) => pervValue + 1)
  };

  // Click on the Tasuku button will lead to the TODO PAGE
  const handleClick = () => {
    setStatus('tasuku');
    console.log(status);
    navigate('/todo');
  };

  // Scenario Nr. 01 : Clicking on the thumbs up 👍
  const handleComplete = () => {
    alert("you complete your Tasuku! I'm so proud of you" + userName);

    // Updating the variable of the HP + 1
    currentUserHP++;

    // CONDITIONS: POINT SYSTEM by completing the task 
    if (currentUserHP >= 5) {
      alert('start🌟');
    } else if (currentUserHP === 4) {
      alert('Arigatō, but keep it up');
    } else if (currentUserHP === 3) {
      alert("I feel better, I'm still mad 🧐");
    } else if (currentUserHP === 2) {
      alert("you saved me, but I'm still sick. Keep going ");
    } else if (currentUserHP === 1) {
      alert("I'm dying, MAYDAY!");
    } else {
      alert('GAME OVER');
    }

    // ### localStorage ###
    // Update the health points 
    localEntry[index] = {
      ...localEntry[index],
      hp: currentUserHP,
    };

    // Send the information to teh localStorage 
    localStorage.setItem('users', JSON.stringify(localEntry));

    // updated the health points in the state  State
    SetHpValue(currentUserHP);
    alert('hey from the scope');
  };

  // Scenario Nr. 02 : Clicking on the thumbs down 👎
  const handleFailed = () => {
    alert(userName + "This time you didn't completed the Tasuku:/");

    //currentUserHP = currentUserHP <= 5 ? currentUserHP - 1 : 5;
    //MATH.MIN METHOD: to reset the given points to 5 or less:
    //by clicking on thumbs down, reset first the points to 5 or decrease for example 1 point from 5 one point 
    currentUserHP = Math.min(currentUserHP - 1, 5);
    // CONDITIONS: POINT SYSTEM by not completing the task 
    if (currentUserHP >= 5) {
      alert('you lost your stars 👹🌟');
    } else if (currentUserHP === 4) {
      alert('behave please ☝️');
    } else if (currentUserHP === 3) {
      alert("i'm so mad 😡");
    } else if (currentUserHP === 2) {
      alert("i'm so sick 🤢 ");
    } else if (currentUserHP === 1) {
      alert("i'm dying, MAYDAY!");
    } else {
      alert('GAME OVER');
    }

    //todo: to solve the empty object thing with Marc
    console.log(currentUserHP);

    // CONDITION: User got greater points then 0 >>
    // Update the points and show a motivational quote
    if (currentUserHP > 0) {
      // 1. update the property currentUserHP
      localEntry[index] = {
        ...localEntry[index],
        hp: currentUserHP,
      };
      // 2. Send the updated Object to the localStorage
      localStorage.setItem('users', JSON.stringify(localEntry));

      // 3. Update the HPValue state that contain the user HP 
      SetHpValue(currentUserHP);
      // console.log(currentUserHP);
      // console.log('update hp');

      // 4. Get motivational quotes from external API
      getQuote().then((data) => {
        let short = shortQuotes(data);
        let randomQuote = getRandomQuote(short);
        // Store the single Quote in an initial state 
        setQuote(randomQuote);
        // Use a boolean to show the Quote in the Bubble chat prompt 
        setShowQuote(true);
      });

    } else {
      // CONDITION: OTHERWISE DELETE THE USER DATA AND LOGOUT FROM THE APP
      // Remove the user from the localStorage, using the splice method 
      // SpliceMethod = target the index(object position in the array and delete it)
      localEntry.splice(index, 1);

      // Send the updated info the the localStorage
      localStorage.setItem('users', JSON.stringify(localEntry));

      // Update the HP states 
      SetHpValue(currentUserHP);
      console.log(currentUserHP);

      // Use the removeItem method to delete the users variables/objects in the localStorage 
      localStorage.removeItem('currentUser');
      localStorage.removeItem('loggedIn');

      // Navigate the user to register again 
      navigate('/reg');

      // Inform the user, user has been deleted 
      alert('delete user');
    }
  };

  // Logout function, when turning off the light 
  const handleLogOut = () => {
    alert('See you later');
    // Use remove items to delete the currentUser & loggedIn boolean 
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');

    // Navigate back to the login page 
    navigate('/');
  };

  return (
    <div className="page-container dashboard-page">
      <div className="top-stage">

        {task === '' && (
          <BubbleKichi
            text={welcome}
            indexCounter={indexCounter}
            now={now}
            regDate={regDate}
          />
        )}

        {task !== '' && showQuote === false && (
          <div className="prompt__bubble-speech dashboard-page">
            <div className="type_effect--dash">{`${userName.toUpperCase()} Your Daily Tasuku: ${task.toUpperCase()}`}</div>
          </div>
        )}

        {task !== '' && showQuote === true && (
          <div className="prompt__bubble-speech dashboard-page ">
            <div className="type_effect--dash quote">{quote}</div>
          </div>
        )}

        {/* <div className="figure-btns-wrapper"> */}
        {/* <div className="starts-container1">
          <div
            className={
              currentUserHP < 6 ? 'motivation-star hidden' : 'motivation-star'
            }
            disabled={currentUserHP < 6}
          />
          <div
            className={
              currentUserHP < 6 ? 'motivation-star hidden' : 'motivation-star'
            }
            disabled={currentUserHP < 6}
          />
          <div
            className={
              currentUserHP < 6 ? 'motivation-star hidden' : 'motivation-star'
            }
            disabled={currentUserHP < 6}
          />
          <div
            className={
              currentUserHP < 6 ? 'motivation-star hidden' : 'motivation-star'
            }
            disabled={currentUserHP < 6}
          />
          <div
            className={
              currentUserHP < 6 ? 'motivation-star hidden' : 'motivation-star'
            }
            disabled={currentUserHP < 6}
          />
        </div> */}


        <Kichi
          hpValue={hpValue}
          // SetHpValue={SetHpValue}
          action={handleFigureClick}
        />
        <div className="buttons-container">

          <ThumbsButton
            action={handleFailed}
            task={task}
            feedback="minus-grid minus" />

          <PrimaryButton
            handleClick={handleClick}
            title="TASUKU"
            className={task === '' ? 'primary-btn tasuku-btn' : 'primary-btn hide'}
          />

          <ThumbsButton
            action={handleComplete}
            task={task}
            feedback="plus-grid plus" />

        </div>

        <TurnonBtn action={handleLogOut} />

      </div>
    </div>
  );
};

export default Dashboard;
