import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings'; // Import the StarRatings component

function Detail() {
    const { movieId } = useParams(); // Extract movieId from URL parameters
    const [movie, setMovie] = useState(null); // State for movie details
    const [error, setError] = useState(null); // State for error handling
    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        if (!movieId) return; // Ensure movieId is available

        const fetchMovieDetails = async () => {
            try {
                // Use the full URL or ensure the base URL is set in your Axios instance
                const response = await axios.get(`http://127.0.0.1:5000/movies/${movieId}`); // Fetch movie details
                setMovie(response.data); // Set movie data in state
            } catch (error) {
                setError('Error fetching movie details. Please try again later.'); // Set error message
                console.error('Error fetching movie details:', error); // Log error
            }
        };

        fetchMovieDetails();
    }, [movieId]); // Dependency array to refetch on movieId change

    if (error) {
        return <Container className="my-4"><p className="text-danger">{error}</p></Container>; // Display error
    }

    if (!movie) {
        return <Container className="my-4"><p>Loading...</p></Container>; // Display loading message
    }

    return (
        <Container className="my-4 detail-container">
            <Helmet>
                <title>{movie.title} - Movie App</title> {/* Set document title */}
            </Helmet>
            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
                Back
            </Button>
            <h1 className="mb-4">{movie.title}</h1>
            {<img src={`/${movie.image_path}`} alt={movie.title} className="img-fluid mb-4" />} {/* Display movie image */}
            <p>{movie.long_description}</p> {/* Display long description */}
           
            <p className="rating">
                <strong>Rating:</strong>
                <StarRatings
                    rating={movie.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name='rating'
                />
            </p>
        </Container>
    );
}

export default Detail;
