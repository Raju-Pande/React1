import React, { Component } from "react";

class MovieCard extends Component {
 

  // The "addStars" method logs the value of "this" when called.
  // Since the method is not using "this" internally, it can be converted to an arrow function.


  // We can use handler functions without binding them to the component but they will lose reference to the current component instance when triggered once. The ES6 concise method syntax does not bind the handler to the component. This can be done using arrow functions.

  // when you craeting arrow function that time not necceary required to binding function use

  // we can  upadte state without re-rendring manually by using "setState()" function 
  addStars = () => {


    // form 1: if you don't want to required previous value that time use the first form 1 e.g: here not required to the movie title name reuired to previous which movie directly change the movie name.

    //and here direclty re-rendring components 


    // this.setState({
    //   stars: this.state.stars + 0.5
    // })

    // form 2: if you want to previous value required that time use the form2

    this.setState((prevState) => {
      if (prevState.stars >= 5) {
        return
      }
      return {
        stars: prevState.stars + 0.5
      }
      // here synchronous use
    }, () => console.log("Stars inside callback", this.state.stars))

    // here Asynchronous nature. use 
    console.log("stars : ", this.state.stars);

    // this.state.satrs +=0.5;
    // console.log("this.state.stars: ", this.state.satrs);

  };

  decStars = () => {
    this.setState((prevState) => {
      if (prevState.stars <= 0) {
        return
      }
      return {
        stars: prevState.stars - 0.5
      }

    })
  }


  handleFav = () => {
    this.setState({
      fav: !this.state.fav
    })
  }

  handleAddToCart = () => {
    this.setState({
      isInCart: !this.state.isInCart
    })
  }
  render() {
    // Destructuring state values for easier usage within JSX.

    // if you want to change the movie name

    // console.log(this.props);

    // const {movie:data}=this.props;
    // console.log(data);
    // const { title, plot, price, rating, stars, fav, isInCart } = data;

    const { title, plot, price, rating, stars, fav, isInCart } = this.props.movie;

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

                  onClick={this.decStars}
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

                <span>{stars}</span>
              </div>

              {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

              {/* or */}

              {/* <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>Un-Favourite</button> */}

              <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "unfavourite-btn" : "favourite-btn"}</button>

              <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={this.handleAddToCart}>{isInCart ? "Remove from Cart" : "Add to cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

