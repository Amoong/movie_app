import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const pictureILike = [
  {
    name: "paintedGirl",
    picture:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "braveBoy",
    picture:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "hikingBoy",
    picture:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

function App() {
  return (
    <div>
      {pictureILike.map(info => (
        <Food name={info.name} picture={info.picture} />
      ))}
    </div>
  );
}

export default App;
