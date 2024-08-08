import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your CSS file
import StarRatings from 'react-star-ratings'; // Import the StarRatings component

function Home() {
    const navigate = useNavigate();
    const movies = [
        { id: 1, name: "The Shawshank Redemption", description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", rating: 5 },
        { id: 2, name: "The Godfather", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", rating: 5 },
        { id: 3, name: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating: 5 },
        { id: 4, name: "12 Angry Men", description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.", rating: 5 },
        { id: 5, name: "Schindler's List", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", rating: 5 },
        { id: 6, name: "Pulp Fiction", description: "The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", rating: 5 },
        { id: 7, name: "The Lord of the Rings: The Return of the King", description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", rating: 5 },
        { id: 8, name: "Forrest Gump", description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.", rating: 5 },
        { id: 9, name: "Fight Club", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", rating: 5 },
        { id: 10, name: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: 5 },
        { id: 11, name: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", rating: 5 },
        { id: 12, name: "The Empire Strikes Back", description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda while his friends are pursued across the galaxy by Darth Vader.", rating: 5 },
        { id: 13, name: "The Good, the Bad and the Ugly", description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", rating: 5 },
        { id: 14, name: "One Flew Over the Cuckoo's Nest", description: "Upon arriving at a mental institution, a brash rebel takes on the oppressive nurse and rallies the patients to take on the institution's authoritarian regime.", rating: 5 },
        { id: 15, name: "Goodfellas", description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife, Karen Hill, and his mob partners, James Conway and Tommy DeVito.", rating: 5 },
        { id: 16, name: "Se7en", description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.", rating: 5 },
        { id: 17, name: "The Silence of the Lambs", description: "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.", rating: 5 },
        { id: 18, name: "City of God", description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", rating: 5 },
        { id: 19, name: "Life is Beautiful", description: "When an open-minded Jewish Italian waiter and his son become imprisoned in a Nazi concentration camp, he uses his humor and imagination to protect his son from the harsh reality of the situation.", rating: 5 },
        { id: 20, name: "The Usual Suspects", description: "A sole survivor tells the twisting tale of an all-star cast of criminals and the infamous Keyser Söze.", rating: 5 }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 5;  // Show 5 movies per page

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/logo.png" // Updated path
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="my-4">
                <Helmet>
                    <title>Home - Movie App</title>
                </Helmet>
                <h1 className="text-center mb-4">HOME PAGE</h1>
                <Row>
                    {currentMovies.map((movie) => (
                        <Col md={12} key={movie.id} className="mb-4">
                            <Card className="movie-card" onClick={() => navigate("/detail", { state: { movie } })}>
                                <Row noGutters>
                                    <Col md={4}>
                                        <Card.Img className="movie-image" src={ " "} alt={movie.name} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title className="movie-title">{movie.name}</Card.Title>
                                            <Card.Text>
                                                {movie.description}
                                            </Card.Text>
                                            <Card.Text className="rating-container">
                                                <strong>Rating:</strong>
                                                <div className="rating-stars">
                                                    <StarRatings
                                                        rating={movie.rating}
                                                        starRatedColor="gold"
                                                        numberOfStars={5}
                                                        starDimension="20px"
                                                        starSpacing="2px"
                                                        name='rating'
                                                    />
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="d-flex justify-content-center mt-4">
                    {pageNumbers.map(number => (
                        <Button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            disabled={number === currentPage}
                            variant={number === currentPage ? 'secondary' : 'primary'}
                            className="mx-1 pagination-button"
                        >
                            {number}
                        </Button>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Home;
