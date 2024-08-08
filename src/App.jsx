import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <Router basename="/imdb-clone">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
