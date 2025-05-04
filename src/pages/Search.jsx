import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../App.css";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import TitleCard from "../components/TitleCard";

function Search() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [data, setData] = useState(null);
  const [details, setDetails] = useState([]);
  document.title = `Results for "${query}" | Streamy`;

  useEffect(() => {
    if (query == null) {
      navigate("/");
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmIwYmZjOTQzY2VkOGFlZWMzNGI2MWE3OTZkZmJjMCIsIm5iZiI6MTczNzQyMzIyNy43NzYsInN1YiI6IjY3OGVmOTdiZGM5NjAzZjk0ZDViMmEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3z4lLTlczx0iA1ntFiOtUzmENJS3u73sENuijYiKIJM",
      },
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        return Promise.all(
          data.results.map((movie) =>
            fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`, options).then((res) => res.json())
          )
        );
      })
      .then((detailsArray) => setDetails(detailsArray))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <>
      <Nav />
      <div className="wrap">
        {console.log(details)}
        {data?.results.length > 0 ? (
          <>
            <Hero title={`Results for "${query}"`} description={`We found ${data.total_results} matching results`} />
            <div className="title-cards">
              {data.results.length === details.length &&
                data.results
                  .sort((a, b) => b.popularity - a.popularity)
                  .map((movie, index) => <TitleCard key={index} data={movie} details={details[index]} type="movie" />)}
            </div>
          </>
        ) : (
          <Hero
            title={`No results found for "${query}"`}
            description={`We found 0 matching results. Check for typos or try with a different keyword?`}
          />
        )}
      </div>
    </>
  );
}

export default Search;
