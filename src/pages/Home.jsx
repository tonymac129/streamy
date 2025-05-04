import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Hero from "../components/Hero";
import Genre from "../components/Genre";
import HomeSearch from "../components/HomeSearch";
import Nav from "../components/Nav";

const genres = [
  { name: "Action", src: "/genres/action.webp" },
  { name: "Animation", src: "/genres/animation.jpg" },
  { name: "Comedy", src: "/genres/comedy.png" },
  { name: "Documentary", src: "/genres/documentary.jpg" },
  { name: "Drama", src: "/genres/drama.webp" },
  { name: "Fantasy", src: "/genres/fantasy.jpg" },
  { name: "Horror", src: "/genres/horror.jpg" },
  { name: "Mystery", src: "/genres/mystery.jpg" },
  { name: "Romance", src: "/genres/romance.jpg" },
  { name: "Sci-Fi", src: "/genres/sci-fi.jpg" },
];

function Home() {
  let navigate = useNavigate();
  let selectedGenres = localStorage.getItem("genres");
  document.title = "Home | Streamy";

  const [query, setQuery] = useState("");

  function handleSearch(e) {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero
          title={`Welcome back, ${localStorage.getItem("display-name") ? localStorage.getItem("display-name") : "user"}!`}
          description="What do you want to explore today on Streamy?"
        />
        <HomeSearch onKeyDown={handleSearch} onChange={(e) => setQuery(e.target.value)} />
        <div className="home-section">
          <h2 className="home-section-title">Your favorite genres</h2>
          <div className="home-section-cards">
            {genres
              .filter((genre) => selectedGenres.includes(genre.name.toLowerCase()))
              .map((genre, index) => (
                <Genre key={index} src={genre.src} name={genre.name} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
