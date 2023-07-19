
import React, { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: 'The Avengers',
          plot:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          rating: '8.0',
          price: 99,
          star: 0,
          fav: false,
          isInCart: false
        },
        {
          title: 'The Avengers',
          plot:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          rating: '8.0',
          price: 99,
          star: 0,
          fav: false,
          isInCart: false
        },
        {
          title: 'The Avengers',
          plot:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          rating: '8.0',
          price: 99,
          star: 0,
          fav: false,
          isInCart: false
        }]
      // this.addStars=this.addStars.bind(this);
    }
  }

  handleAddStars = (movie) => {

    const { movies } = this.state;

    const movieId = movies.indexOf(movie)

    if (movies[movieId].star < 5) {
      movies[movieId].star += 0.5;
    }
    this.setState({
      movies
    })
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star > 0) {
      movies[movieId].star -= 0.5;
    }

    this.setState({
      movies
    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
      movies
    })
  }
  render() {

    const { movies } = this.state
    return (

      <div className="main">
        {movies.map((movie, index) => (
          <MovieCard movies={movie}
            key={index}
            onIncStars={this.handleAddStars}
            onDecStars={this.handleDecStars}
            onClickFav={this.handleToggleFav}
            onClickAddtocart={this.handleAddtocart}
          />
        ))}
      </div>

    )
  }
}
export default MovieList;