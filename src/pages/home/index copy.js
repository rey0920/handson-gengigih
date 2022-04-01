import { Component } from "react";

import CardImage from "../card";

export default class Home extends Component {
  state = {
    gifs: [],
    text: "",
  };

  handleInput = (e) => {
    this.setState({ text: e.target.value });
  };

  getGifs = async (e) => {
    e.preventDefault();

    const gifs = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    ).then((response) => response.json());
    this.setState({ gifs: gifs.data });
  };

  render() {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
          alt="gambar"
          className="rounded-md"
          width={400}
        />

        <form className="mt-2" onSubmit={this.getGifs}>
          <input
            type="text"
            placeholder="Cari apa .."
            className="input-form"
            onChange={this.handleInput}
          />
          <input type="submit" value="Search" className="btn" />
        </form>

        <section className="container cards">
          {this.state.gifs
            .filter((gif) => gif.rating === "g")
            .map((gif) => (
              <CardImage
                key={gif.id}
                url={gif.images.original.url}
                title={gif.title}
              />
            ))}
        </section>
      </div>
    );
  }
}
