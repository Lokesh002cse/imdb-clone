import json
import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/movies/*": {"origins": "http://localhost:5173"}})

# Configure the PostgreSQL database URI using environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"postgresql://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}"
    f"@{os.getenv('POSTGRES_HOST')}:{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Movie(db.Model):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    director = db.Column(db.String(100), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    short_description = db.Column(db.String(255), nullable=True)
    long_description = db.Column(db.Text, nullable=True)
    image_path = db.Column(db.String(255), nullable=True)  # New column for storing image paths

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'year': self.year,
            'genre': self.genre,
            'director': self.director,
            'rating': self.rating,
            'short_description': self.short_description,
            'long_description': self.long_description,
            'image_path': self.image_path  # Include image path in the dictionary representation
        }

def load_movies_from_json(file_path):
    with open(file_path, 'r') as file:
        movies_data = json.load(file)
        for movie_data in movies_data:
            # Check if the movie already exists
            existing_movie = Movie.query.filter_by(title=movie_data['title']).first()
            if not existing_movie:
                new_movie = Movie(
                    title=movie_data['title'],
                    year=movie_data['year'],
                    genre=movie_data['genre'],
                    director=movie_data['director'],
                    rating=movie_data['rating'],
                    short_description=movie_data.get('short_description', ''),
                    long_description=movie_data.get('long_description', ''),
                    image_path=movie_data.get('image_path', '')  # Load image path from JSON
                )
                db.session.add(new_movie)
        db.session.commit()

@app.route('/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    return jsonify([movie.to_dict() for movie in movies]), 200

@app.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    return jsonify(movie.to_dict()), 200

@app.route('/movies', methods=['POST'])
def add_movie():
    data = request.json
    new_movie = Movie(
        title=data['title'],
        year=data['year'],
        genre=data['genre'],
        director=data['director'],
        rating=data['rating'],
        short_description=data.get('short_description', ''),
        long_description=data.get('long_description', ''),
        image_path=data.get('image_path', '')  # Get image path from the request data
    )
    db.session.add(new_movie)
    db.session.commit()
    return jsonify(new_movie.to_dict()), 201

@app.route('/movies/<int:movie_id>', methods=['PUT'])
def update_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    data = request.json
    movie.title = data.get('title', movie.title)
    movie.year = data.get('year', movie.year)
    movie.genre = data.get('genre', movie.genre)
    movie.director = data.get('director', movie.director)
    movie.rating = data.get('rating', movie.rating)
    movie.short_description = data.get('short_description', movie.short_description)
    movie.long_description = data.get('long_description', movie.long_description)
    movie.image_path = data.get('image_path', movie.image_path)  # Update image path if provided
    db.session.commit()
    return jsonify(movie.to_dict()), 200

@app.route('/movies/<int:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    db.session.delete(movie)
    db.session.commit()
    return jsonify({'message': 'Movie deleted'}), 200

if __name__ == '__main__':
    with app.app_context():  # Ensure the application context is active
        db.create_all()  # Create tables in the database
        load_movies_from_json('movies.json')  # Load data from JSON and insert into the database
    app.run(debug=True)
