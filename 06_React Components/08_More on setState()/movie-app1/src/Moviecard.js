import React, { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0
    };
    // this.addStars=this.addStars.bind(this);
  }

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

  render() {
    // Destructuring state values for easier usage within JSX.
    const { title, plot, price, rating, stars } = this.state;

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





// MCQ

// What will be the value of the count when the button is clicked if its initial value is 1?
// handleClick
// ()
// this.setState({ count: this.state.count + 1 });
// this.setState({ count: this.state.count + 2 });
// this.setState({ count: this.state.count + 3 });
// this.setState({ count: this.state.count + 4 })
// render() {
//   return <button onClick (this.handleClick) > Click Me</button >;
// }

// ans: 5

// React groups multiple state updates into a single rerender for better performance. So only the last call to setState is executed after the button is clicked hence with an initial value of count as 1 will become 5 after the button is clicked




// MCQ: 2

// What will be the value of the count when the button is clicked 3 times if the initial value of the
// count is -1?
// increaseCount = () => {

//   this.setState(
//     {
//       count: this.state.count + 1
//     },
//     () => {
//       this.setState({
//         count: this.state.count + 1
//       });
//     }
//   );
// };

// ANS: 5

// ANS: We are calling setState again in the callback of setState. Hence, both will be executed one after the other. In the first click, it will be (-1+1+1=1), in the second click, it will be (1+1+1=3)and in the third click, it will be (3+1+1=5).



// increaseCount = () => {
//   this.setState({
//     count: this.state.count + 1
//   });
//   this.setState((prevState) => {
//     return {
//       count: prevState.count + 1
//     };
//   });
//   this.setState({
//     count: this.state.count + 1
//   });
//   this.setState((prevState) => {
//     return {
//       count: prevState.count + 1
//     };
//   });
// };


// ANS: 4

// React groups multiple state updates into a single rerender for better performance. And if setState is called by passing a callback function that takes the previous state as an argument, then it’s get stored in the queue and executed. Hence (0+1+1=2) and (2+1+1=4).