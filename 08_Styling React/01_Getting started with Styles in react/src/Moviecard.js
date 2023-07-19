import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    // Destructuring state values for easier usage within JSX.

    // if you want to change the movie name

    // console.log(this.props);

    // const {movie:data}=this.props;
    // console.log(data);
    // const { title, plot, price, rating, stars, fav, isInCart } = data;


    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } = this.props

    const { title, plot, poster, price, rating, star, fav, isInCart } = this.props.movies;
    console.log(this.props.movies)
    return (
      <div className="main">
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="Poster"
              src={poster}
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"

                  onClick={() => onDecStars(movies)}
                />

                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />

                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  // onClick={this.addStars.bind(this)}
                  onClick={() => onIncStars(movies)}
                />

                <span className="starCount">{star}</span>
              </div>

              {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

              {/* or */}

              {/* <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>Un-Favourite</button> */}

              <button className={fav ? "unfavourite-btn" : "favourite-btn"}  onClick={() => onClickFav(movies)}>{fav ? "unfavourite-btn" : "favourite-btn"}</button>

              <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={() => onClickAddtocart(movies)}>{isInCart ? "Remove from Cart" : "Add to cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
