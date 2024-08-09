# IMDB Clone Application

This project consists of a Flask backend and a ReactJS frontend. The backend serves APIs for movie data, and the frontend provides a user interface to interact with these APIs. This application uses postgresql as database.  

## Project Structure
```
project-directory/
│
├── backend/
│ ├── app.py
│ ├── models.py
│ ├── movies.json
│ └── requirements.txt
├── .env
├── src/
├── public/
├── package.json
└── README.md
```

## Backend Setup (Flask)

### Create `.env` File

Create a `.env` file in the project directory to store your PostgreSQL credentials. Here’s an example of what the file should contain:

```env
POSTGRES_USER=<database_username>
POSTGRES_PASSWORD=<database_password>
POSTGRES_DB=<database_name>
POSTGRES_HOST=<database_host>
POSTGRES_PORT=<database_port>
```
Replace <database_username>, <database_password>, and <database_name> etc with your actual PostgreSQL credentials.
### Install Dependencies
Navigate to the backend/ directory and install the required Python packages:

```
cd backend
pip install -r requirements.txt
```
```requiremnets.txt
Flask
Werkzeug
Flask-SQLAlchemy
SQLAlchemy
psycopg2-binary
```

### Initialize Database
Ensure your PostgreSQL server is running. Run the following commands to drop the movies table (if it exists), create the table, and load data from movies.json:
```
DROP TABLE IF EXISTS movies;
```

### Start the Flask application
```
python app.py
```
The app.py script will handle creating the database table and loading the data from movies.json into the movies table.

The server will be accessible at ``` http://localhost:5000```.

## Frontend Setup (ReactJS)
### Install Dependencies
Navigate to the frontend/ directory and install the required Node.js packages:
```
npx create-react-app frontend
cd frontend
npm install 
```
### Start the ReactJS Development Server
Run the following command to start the ReactJS development server:

```
npm start
The frontend will be accessible at http://localhost:3000.
```
# API Endpoints
### Get All Movies
To retrieve a list of all movies, make a GET request to:

```
http://localhost:5000/movies
```
### Get Movie by ID
To retrieve a specific movie by its ID, make a GET request to:

```
http://localhost:5000/movies/<movie_id>
```
Replace <movie_id> with the ID of the movie you want to retrieve.

### Add a New Movie
To add a new movie, make a POST request to:

```
http://localhost:5000/movies
```
Include the movie details in the request body as JSON:

```
{
  "title": "New Movie",
  "year": 2023,
  "genre": "Drama",
  "director": "John Doe",
  "rating": 7.5,
  "short_description": "A new drama film.",
  "long_description": "This film explores the dramatic life of a young individual seeking their path in a challenging world.",
  "image_path": "images/new_movie.jpg"
}
```
### Update a Movie
To update an existing movie, make a PUT request to:

```
http://localhost:5000/movies/<movie_id>
```
Include the updated movie details in the request body as JSON.

### Delete a Movie
To delete a movie by its ID, make a DELETE request to:

```
http://localhost:5000/movies/<movie_id>
```
Notes
Ensure that both the Flask backend and the ReactJS frontend are running simultaneously for full functionality.

## Troubleshooting
If you encounter issues with database connectivity, check your .env file for correct PostgreSQL credentials.
For issues with the ReactJS frontend, ensure all required Node.js packages are installed and there are no syntax errors in the code.
if you face any error related to database insertion, delete movies table and then run ```python app.py``` again

## Future Work
updating ratings

## License

[MIT](https://choosealicense.com/licenses/mit/)

