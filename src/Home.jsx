import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your CSS file
import StarRatings from 'react-star-ratings'; // Import the StarRatings component
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const moviesPerPage = 5; // Show 5 movies per page

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/movies');
                setMovies(Array.isArray(response.data) ? response.data : []); // Ensure this is an array
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError('Error fetching movies. Please try again later.');
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

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
            <Navbar expand="lg" className="navbar">
  <Container>
    <Navbar.Brand href="#home">
      <img src="/images/logo.png" alt=" " className="navbar-logo" />  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> {/* ms-auto aligns links to the right */}
        <Nav.Link href="#home">Home</Nav.Link>        <Nav.Link href="#movies">Movies</Nav.Link>
        <Nav.Link href="#tv">TV Shows</Nav.Link>
        <Nav.Link href="#music">Music</Nav.Link>
        <Nav.Link href="#photos">Photos & Videos</Nav.Link> {/* Add more links if needed */}
        <NavDropdown title="More" id="plex-more-dropdown"> {/* Create a dropdown for additional options */}
          <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#account">Account</NavDropdown.Item>
          <NavDropdown.Item href="#signout">Sign Out</NavDropdown.Item>
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

                {loading && <div className="text-center">Loading...</div>}
                {error && <div className="text-center text-danger">{error}</div>}

                {!loading && !error && (
                    <>
                        <Row>
                            {currentMovies.length > 0 ? (
                                currentMovies.map((movie) => (
                                    <Col md={12} key={movie.id} className="mb-4">
                                        <Card className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
                                            <Row noGutters>
                                                <Col md={4}>
                                                <Card.Img className="movie-image" src={`/${movie.image_path}`} alt={movie.title} />

                                                </Col>
                                                <Col md={8}>
                                                    <Card.Body>
                                                        <Card.Title className="movie-title">{movie.title}</Card.Title>
                                                        <Card.Text>
                                                            {movie.short_description}
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
                                ))
                            ) : (
                                <Col className="text-center">No movies available</Col>
                            )}
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
                    </>
                )}
            </Container>
        </>
    );
}

export default Home;