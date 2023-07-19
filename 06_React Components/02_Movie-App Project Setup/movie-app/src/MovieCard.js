import React from "react";

class MovieCard extends React.Component {

    render() {
        return (
            <div className="main">

                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://1.bp.blogspot.com/-BKLRtKn6O3s/Xr7PqPW4lHI/AAAAAAAAAZ4/hJVLaB-sL_kc2INXLtIy6ccA5G4OgYpEwCLcBGAsYHQ/s1600/264ac129611747.55faffbc79c61.jpg" />
                    </div>

                    <div className="right">
                        <div className="title">DRISHYAM</div>
                        <div className="plot">- Get the list of latest Hindi movie download, new and latest Bollywood movies 2023. Check out New Bollywood movies online, Upcoming Indian movies and download recent movies ...</div>
                        <div className="price">Rs.199</div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="str-btn">
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
