import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="nav-search">
      <img src="/icons/search.svg" />
      <input
        type="text"
        placeholder="Search Streamy"
        className="nav-search-bar"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default NavSearch;
