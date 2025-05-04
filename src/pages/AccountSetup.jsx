import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Icons from "../components/Icons";
import Hero from "../components/Hero";
import Card from "../components/Card";
import InputField from "../components/InputField";
import ContentBtn from "../components/ContentBtn";

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

function AccountSetup() {
  let navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  document.title = "Account Setup | Streamy";

  function nextPage() {
    setPage(1);
  }

  function backPage() {
    setPage(0);
  }

  function handleDisplayChange(e) {
    setDisplayName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function selectService(newService) {
    setSelectedServices((prevServices) => [...prevServices, newService]);
  }

  function deselectService(newService) {
    setSelectedServices((prevServices) => prevServices.filter((service) => service !== newService));
  }

  function selectGenre(newGenre) {
    setSelectedGenres((prevGenres) => [...prevGenres, newGenre]);
  }

  function deselectGenre(newGenre) {
    setSelectedGenres((prevGenres) => prevGenres.filter((genre) => genre !== newGenre));
  }

  function createAccount() {
    localStorage.setItem("display-name", displayName);
    localStorage.setItem("about", about);
    localStorage.setItem("services", JSON.stringify(selectedServices));
    localStorage.setItem("genres", JSON.stringify(selectedGenres));
    navigate("/");
    console.log(localStorage.getItem("genres"));
  }

  return (
    <>
      <Icons className="absolute-icons" />
      <div className="setup-wrap">
        <Hero title={"Welcome to Streamy!"} description="Let's get your account set up first." />
        <div className="content-containers">
          <div className="content" style={{ transform: page === 0 ? "translateX(0)" : "translateX(-200%)" }}>
            <div className="form">
              <InputField
                label="Display name"
                placeholder="What's your name?"
                value={displayName}
                onchange={handleDisplayChange}
              />
              <InputField label="About" placeholder="Tell us about yourself" value={about} onchange={handleAboutChange} />
              <div className="input">
                <label>Streaming services</label>
                <div className="services">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      src={service.src}
                      name={service.name}
                      checked={selectedServices.includes(service.id) ? true : false}
                      onChange={
                        selectedServices.includes(service.id)
                          ? () => deselectService(service.id)
                          : () => selectService(service.id)
                      }
                    />
                  ))}
                </div>
              </div>
              <ContentBtn name="Next" id="next" onclick={nextPage} />
            </div>
            <img src="/covers/streaming.webp" className="content-img" />
          </div>
          <div className="content" style={{ transform: page === 1 ? "translateX(-100%)" : "translateX(0%)" }}>
            <div className="form">
              <div className="input">
                <label>Select your favorite genres</label>
                <div className="services">
                  {genres.map((genre) => {
                    let id = genre.name.toLocaleLowerCase();
                    return (
                      <Card
                        key={id}
                        src={genre.src}
                        name={genre.name}
                        checked={selectedGenres.includes(id) ? true : false}
                        onChange={selectedGenres.includes(id) ? () => deselectGenre(id) : () => selectGenre(id)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="content-btns">
                <ContentBtn name="Back" onclick={backPage} />
                <ContentBtn name="Create account" onclick={createAccount} />
              </div>
            </div>
            <img src="/covers/genres.webp" className="content-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSetup;
