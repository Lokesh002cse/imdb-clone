import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ensure the route parameter matches the one used in Detail.jsx */}
        <Route path="/movies/:movieId" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
