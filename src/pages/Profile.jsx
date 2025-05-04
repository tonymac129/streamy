import { useNavigate } from "react-router-dom";
import "../App.css";
import Genre from "../components/Genre";
import Nav from "../components/Nav";

const services = [
  { id: "netflix", name: "Netflix", src: "/services/netflix.jpg" },
  { id: "prime", name: "Prime", src: "/services/prime.jpg" },
  { id: "disney", name: "Disney+", src: "/services/disney.jpg" },
  { id: "max", name: "Max", src: "/services/max.jpg" },
  { id: "paramount", name: "Paramount+", src: "/services/paramount.jpg" },
  { id: "hulu", name: "Hulu", src: "/services/hulu.png" },
];

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

function Profile() {
  let displayName = localStorage.getItem("display-name") ? localStorage.getItem("display-name") : "User";
  let selectedGenres = localStorage.getItem("genres");
  document.title = `${displayName}'s Profile | Streamy`;

  return (
    <>
      <Nav />
      <div className="wrap">
        <div className="profile-hero">
          <h1 className="profile-hero-title">{displayName}</h1>
          <p className="profile-hero-description">{localStorage.getItem("about")}</p>
          <div className="profile-services">
            {services
              .filter((service) => JSON.parse(localStorage.getItem("services")).includes(service.id))
              .map((service) => (
                <img src={service.src} className="profile-service" />
              ))}
          </div>
        </div>
        <div className="home-section">
          <h2 className="home-section-title">Recent activity</h2>
          <div className="home-section-cards">
            {genres
              .filter((genre) => selectedGenres.includes(genre.name.toLowerCase()))
              .map((genre, index) => (
                <Genre key={index} src={genre.src} name={genre.name} />
              ))}
          </div>
        </div>
        <div className="home-section">
          <h2 className="home-section-title">Liked titles</h2>
          <div className="home-section-cards">
            {genres
              .filter((genre) => selectedGenres.includes(genre.name.toLowerCase()))
              .map((genre, index) => (
                <Genre key={index} src={genre.src} name={genre.name} />
              ))}
          </div>
        </div>
        <div className="home-section">
          <h2 className="home-section-title">Watchlist</h2>
          <div className="home-section-cards">
            {genres
              .filter((genre) => selectedGenres.includes(genre.name.toLowerCase()))
              .map((genre, index) => (
                <Genre key={index} src={genre.src} name={genre.name} />
              ))}
          </div>
        </div>
        <div className="home-section">
          <h2 className="home-section-title">Favorite genres</h2>
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

export default Profile;
