// import React from "react";

// class MovieCard extends React.Component{

// }

// or


import { Component } from "react";

class MovieCard extends Component {

    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" />
                    </div>

                    <div className="right">
                        <div className="title"> The Avengers</div>
                        <div className="plot"> Supernatural powers shown in the movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9 </div>
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