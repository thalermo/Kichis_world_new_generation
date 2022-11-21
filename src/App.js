//import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages components
import Login from "./components/pages/login/Login.jsx"
import Registration from './components/pages/registration/Registration';
import Dashboard from "./components/pages/dashboard/Dashboard.jsx"
import GameOver from './components/pages/gameover/GameOver';
import Todo from "./components/pages/todo/Todo.jsx"

// CSS files:

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/reg" element={<Registration />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/over" element={<GameOver />} />
    </Routes>

  );
}

export default App;
