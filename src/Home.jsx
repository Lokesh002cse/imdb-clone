import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
    const navigate = useNavigate();
    const movies = [
        {
            id: 1,
            name: "The Shawshank Redemption",
            description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
            rating: "5",
            image: "path/to/image1.jpg"
        },
        {
            id: 2,
            name: "The Godfather",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            rating: "5",
            image: "path/to/image2.jpg"
        },
        // Add more movies here
    ];

    return (
        <div className="homepage">
            {movies.map((movie) => (
                <div
                    className="movie-card"
                    key={movie.id}
                    onClick={() => navigate("/detail")}
                >
                    <img src={movie.image} alt={movie.name} />
                    <h1>{movie.name}</h1>
                    <p>{movie.description}</p>
                    <p>{movie.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
