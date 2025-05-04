import { Link } from "react-router-dom";
import Icons from "../components/Icons";
import NavSearch from "../components/NavSearch";

function Nav({ page = "" }) {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src="/logo.png" />
      </Link>
      <NavSearch />
      <div className="right">
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/shows" className="nav-link">
          Shows
        </Link>
        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Icons />
      </div>
    </nav>
  );
}

export default Nav;
