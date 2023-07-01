// import React from "react";

// class MovieCard extends React.Component{

// }

// or


// state: state in built in object 
// single source of truth in react

// The state is used to manage dynamic information in a React component.
// The initial state is defined in the constructor in the this.state class variable.
// It is a built-in React object that is used to contain data or information about the component.


import { Component } from "react";

class MovieCard extends Component {
    constructor(){
        super();
        this.state={
            title:"The Avengers ",
            plot:"Supernatural powers shown in the movie.",
            price:199,
            rating:8.9,
        }
    }


    render() {
        const {title,plot,price,rating}=this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" />
                    </div>

                    <div className="right">
                        <div className="title"> {title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating} </div>
                            <div className="star-dis">
                                <img className="str-btn"
                                    alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" />

                                <img className="stars"
                                    alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img className="str-btn"
                                    alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />

                                    <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;