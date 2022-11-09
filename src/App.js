//import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Todo from './components/assets/Todo';
import GameOver from './components/GameOver';

// CSS files:

function App() {
  // state for iteration the welcome_text array
  //! const [indexCounter, setIndexCounter] = useState(1);
  //! const [status, setStatus] = useState('');
  //! console.log(status);
  //! const [show, setShow] = useState(false);

  // info state, to get inputs from the user

  // useEffect(() => {
  //   setInterval(() => setShow(true), 5000);
  // }, []);

  //! clicking on the figure will iterating the text array
  // const handleFigureClick = () => {
  //   setIndexCounter(indexCounter + 1);
  //   console.log('click');
  //   console.log(indexCounter);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reg" element={<Registration />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/over" element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default App;
