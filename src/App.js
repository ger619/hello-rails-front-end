import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/greetings';
import './ass.css';

function App() {
  return (
    <Router>
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}
export default App;
