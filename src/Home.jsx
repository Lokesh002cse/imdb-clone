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
        {
            id: 3,
            name: "The Dark Knight",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            rating: "5",
            image: "path/to/image3.jpg"
        },
        {
            id: 4,
            name: "12 Angry Men",
            description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
            rating: "5",
            image: "path/to/image4.jpg"
        },
        {
            id: 5,
            name: "Schindler's List",
            description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            rating: "5",
            image: "path/to/image5.jpg"
        },
        {
            id: 6,
            name: "Pulp Fiction",
            description: "The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            rating: "5",
            image: "path/to/image6.jpg"
        },
        {
            id: 7,
            name: "The Lord of the Rings: The Return of the King",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            rating: "5",
            image: "path/to/image7.jpg"
        },
        {
            id: 8,
            name: "Forrest Gump",
            description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            rating: "5",
            image: "path/to/image8.jpg"
        },
        {
            id: 9,
            name: "Fight Club",
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            rating: "5",
            image: "path/to/image9.jpg"
        },
        {
            id: 10,
            name: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            rating: "5",
            image: "path/to/image10.jpg"
        }
    ];

    return (
        <div className="homepage">
            {movies.map((movie) => (
                <div
                    className="movie-card"
                    key={movie.id}
                    onClick={() => navigate("/detail", { state: { movie } })}
                >
                    <img src={movie.image} alt={movie.name} />
                    <div className="movie-card-content">
                        <h1>{movie.name}</h1>
                        <p>{movie.description}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
