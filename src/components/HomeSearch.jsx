function HomeSearch({ onKeyDown, onChange }) {
  return (
    <div className="home-search">
      <img src="/icons/search.svg" className="home-search-icon" />
      <input
        type="text"
        className="home-search-bar"
        placeholder="Search for movies and shows"
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
}

export default HomeSearch;
