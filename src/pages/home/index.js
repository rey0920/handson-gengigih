import { useEffect, useState } from "react";
import CardImage from "../card";

export default function Home() {
  const [gifs, setGifs] = useState([]);
  const [text, setText] = useState("mario");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const getGifs = (e) => {
    e.preventDefault();
    getDataGifs();
  };

  const getDataGifs = async () => {
    const gifs = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    ).then((response) => response.json());

    setGifs(gifs.data);
  };

  useEffect(() => getDataGifs(), []);

  return (
    <div>
      <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        alt="gambar"
        className="rounded-md"
        width={300}
      />

      <form className="mt-2" onSubmit={getGifs}>
        <input
          type="text"
          placeholder="Cari apa .."
          className="input-form"
          onChange={handleInput}
        />
        <input type="submit" value="Search" className="btn" />
      </form>

      <section className="container cards">
        {gifs.map((gif) => (
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
