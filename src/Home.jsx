import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

function Home() {
    const navigate = useNavigate();
    const movies = [
        { id: 1, name: "The Shawshank Redemption", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", rating: "5", image: "path/to/image1.jpg" },
        { id: 2, name: "The Godfather", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", rating: "5", image: "path/to/image2.jpg" },
        { id: 3, name: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating: "5", image: "path/to/image3.jpg" },
        { id: 4, name: "12 Angry Men", description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.", rating: "5", image: "path/to/image4.jpg" },
        { id: 5, name: "Schindler's List", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", rating: "5", image: "path/to/image5.jpg" },
        { id: 6, name: "Pulp Fiction", description: "The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", rating: "5", image: "path/to/image6.jpg" },
        { id: 7, name: "The Lord of the Rings: The Return of the King", description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", rating: "5", image: "path/to/image7.jpg" },
        { id: 8, name: "Forrest Gump", description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.", rating: "5", image: "path/to/image8.jpg" },
        { id: 9, name: "Fight Club", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", rating: "5", image: "path/to/image9.jpg" },
        { id: 10, name: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: "5", image: "path/to/image10.jpg" },
        { id: 11, name: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", rating: "5", image: "path/to/image11.jpg" },
        { id: 12, name: "The Empire Strikes Back", description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda while his friends are pursued across the galaxy by Darth Vader.", rating: "5", image: "path/to/image12.jpg" },
        { id: 13, name: "The Good, the Bad and the Ugly", description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", rating: "5", image: "path/to/image13.jpg" },
        { id: 14, name: "One Flew Over the Cuckoo's Nest", description: "Upon arriving at a mental institution, a brash rebel takes on the oppressive nurse and rallies the patients to take on the institution's authoritarian regime.", rating: "5", image: "path/to/image14.jpg" },
        { id: 15, name: "Goodfellas", description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife, Karen Hill, and his mob partners, James Conway and Tommy DeVito.", rating: "5", image: "path/to/image15.jpg" },
        { id: 16, name: "Se7en", description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.", rating: "5", image: "path/to/image16.jpg" },
        { id: 17, name: "The Silence of the Lambs", description: "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.", rating: "5", image: "path/to/image17.jpg" },
        { id: 18, name: "City of God", description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", rating: "5", image: "path/to/image18.jpg" },
        { id: 19, name: "Life is Beautiful", description: "When an open-minded Jewish Italian waiter and his son become imprisoned in a Nazi concentration camp, he uses his humor and imagination to protect his son from the harsh reality of the situation.", rating: "5", image: "path/to/image19.jpg" },
        { id: 20, name: "The Usual Suspects", description: "A sole survivor tells the twisting tale of an all-star cast of criminals and the infamous Keyser Söze.", rating: "5", image: "path/to/image20.jpg" }
    ];

    return (
        <div className="home">
            <Helmet>
                <title>Home - Movie App</title>
            </Helmet>
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
