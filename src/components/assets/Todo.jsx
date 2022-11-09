import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Todo.css';
import { ReturnIcon, TodoBtn } from './Buttons';

const Todo = () => {
  const [oneTask, setOneTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  const addTask = () => {
    setTaskList([...taskList, oneTask]);

    const today = new Date();
    const taskDateStamp =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDay() + 1);

    let localEntry = JSON.parse(localStorage.getItem('users'));
    let currentUserEntry = localStorage.getItem('currentUser');

    //getting just number
    let index = localEntry.findIndex(
      (element) => element.email === currentUserEntry
    );

    localEntry[index] = {
      ...localEntry[index],
      task: oneTask,
      timeStamp: taskDateStamp,
    };

    //console.log(localEntry);
    //console.log(localStorage);
    localStorage.setItem('users', JSON.stringify(localEntry));
    if (oneTask !== '') {
      alert('Tasuku is set!');
      navigate('/dash');
    }

    //console.log(localStorage);
  };

  //! Return Icon with onmouseover, Out, action etc.
  const [isMouseOver, setMouseOver] = useState(false);
  const handleReturnEntry = () => {
    navigate('/dash');
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="todo stage">
      <div className="todo-frame">
        <div className="task-form">
          <div className="todo--bubble">
            {!isMouseOver && (
              <div className=" type_effect--todo">
                Tell me what is your daily Tasuku
              </div>
            )}

            {isMouseOver && (
              <div className="type_effect--tutorial">
                Click to exit the Tasuku room!
              </div>
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
          <TodoBtn action={addTask} />
          <ReturnIcon
            action={handleReturnEntry}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            isMouseOver={isMouseOver}
            setMouseOver={setMouseOver}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
