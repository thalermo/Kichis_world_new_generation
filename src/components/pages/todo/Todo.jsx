// Style sheets 
import './todo.css';
import "../../ui/buttons/primaryButton.css"
import "../../ui/buttons/shifterButton.css"

// React liberties 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import UI components 
import ShifterButton from "../../ui/buttons/ShifterButton";
import PrimaryButton from "../../ui/buttons/PrimaryButton";

function Todo() {

  // States for the entered task 
  const [oneTask, setOneTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // import the navigate Router method 
  const navigate = useNavigate();

  // add task function: 
  const addTask = () => {

    // update the state with new the new 
    setTaskList([...taskList, oneTask]);

    //  getting the time stamp 
    const today = new Date();
    const taskDateStamp =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDay() + 1);

    // getting access to the localStorage of both items 
    let localEntry = JSON.parse(localStorage.getItem('users'));
    let currentUserEntry = localStorage.getItem('currentUser');

    //getting the position of the object in the array according to the email 
    let index = localEntry.findIndex(
      (element) => element.email === currentUserEntry
    );

    // update the object in the localStorage 
    localEntry[index] = {
      ...localEntry[index],
      task: oneTask,
      timeStamp: taskDateStamp,
    };

    // Sent the updated information to the localStorage 
    localStorage.setItem('users', JSON.stringify(localEntry));

    // after setting a task, just alert the user and navigate to the dashboard 
    if (oneTask !== '') {
      alert('Tasuku is set!');
      navigate('/dash');
    }

  };

  // State for mouseOver nad mouseOut 
  const [isMouseOver, setMouseOver] = useState(false);

  // Prompt changed on mouseOver 
  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  // Handle click, after clicking on the shifter to go back to the dashboard 
  const handleReturnEntry = () => {
    navigate('/dash');
  };



  return (
    <div className="page-container tasuku-page">
      <div className="bg-frame">


        <main className="bg-frame__content">
          <div className="prompt__bubble-speech tasuku-bubble">
            {!isMouseOver && (
              <h1 className=" type_effect title ">
                Tell me what is your daily Tasuku
              </h1>
            )}
            {isMouseOver && (
              <h1 className="type_effect title">
                Click to exit the Tasuku room!
              </h1>
            )}
          </div>
          <input
            placeholder="write your Tasuku here..."
            className="user-input"
            type="text"
            onChange={(e) => {
              setOneTask(e.target.value);
            }}
          />
          <PrimaryButton
            handleClick={addTask}
            title="SET TASUKU"
            className="primary-btn set-tasuku-btn"
          />

          <ShifterButton
            className="shifter-btn return-btn"
            action={handleReturnEntry}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            isMouseOver={isMouseOver}
            setMouseOver={setMouseOver}
          />
        </main>
      </div>

    </div>

  );
};

export default Todo;
