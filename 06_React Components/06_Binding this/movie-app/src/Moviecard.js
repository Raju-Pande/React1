import React, { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
    };
    // this.addStars=this.addStars.bind(this);
  }

  // The "addStars" method logs the value of "this" when called.
  // Since the method is not using "this" internally, it can be converted to an arrow function.


  // We can use handler functions without binding them to the component but they will lose reference to the current component instance when triggered once. The ES6 concise method syntax does not bind the handler to the component. This can be done using arrow functions.

  // when you craeting arrow function that time not necceary required to binding function use
  addStars = () => {
    console.log("this: ", this);
    // console.log("this is stars");
  };

  render() {
    // Destructuring state values for easier usage within JSX.
    const { title, plot, price, rating } = this.state;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
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
                  onClick={this.addStars}
                />

                <span>0</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
