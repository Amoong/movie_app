import React from "react";
import PropTypes from "prop-types";

const pictureILike = [
  {
    id: 1,
    name: "paintedGirl",
    picture:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 5
  },
  {
    id: 2,
    name: "braveBoy",
    picture:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4
  },
  {
    id: 3,
    name: "hikingBoy",
    picture:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.3
  }
];

function Pictures({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>rating: {rating}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Pictures.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {pictureILike.map(info => (
        <Pictures
          key={info.id}
          name={info.name}
          picture={info.picture}
          rating={info.rating}
        />
      ))}
    </div>
  );
}

export default App;
