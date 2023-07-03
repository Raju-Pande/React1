



import React, { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            isInCart: false
        };
        // this.addStars=this.addStars.bind(this);
    }

    render() {

        const { title, plot, price, rating, stars, fav, isInCart } = this.state
        return (
            <>
                <MovieCard movie={this.state} />

            </>
        )
    }
}
export default MovieList;