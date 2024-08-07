import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DetailPage from './Detail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
