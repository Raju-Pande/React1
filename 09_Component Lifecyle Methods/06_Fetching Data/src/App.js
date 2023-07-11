import React from "react";
import Image from "./components/Image";
import "./styles.css";

class App extends React.Component {
  state = {
    photos: [],
    loading: false
  };

  componentDidMount() {
    console.log("Loading...");
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((photos) => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    const loadingMessage = photos.length === 0 && <h1>Loading...</h1>;

    return (
      <>
        {loadingMessage}
        <div className="App">
          {photos.map((photo) => (
            <Image key={photo.id} photo={photo} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
