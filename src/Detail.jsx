import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function DetailPage() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        return <p>No movie selected</p>;
    }

    return (
        <div className="detail-page">
            <p>{movie.description}</p>
        </div>
    );
}

export default DetailPage;
