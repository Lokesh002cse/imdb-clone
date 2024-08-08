import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Detail() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        return <p>No movie selected</p>;
    }

    return (
        <Container className="my-4 detail-container">
            <Helmet>
                <title>{movie.name} - Movie App</title>
            </Helmet>
            <h1 className="mb-4">{movie.name}</h1>
            <img src={movie.image} alt={movie.name} className="img-fluid mb-4" />
            <p>{movie.description}</p>
            <p className="rating">Rating: {movie.rating}</p>
        </Container>
    );
}

export default Detail;
