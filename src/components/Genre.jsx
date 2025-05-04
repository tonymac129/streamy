function Genre({ src, name }) {
  return (
    <div className="genre">
      <img src={src} className="genre-logo" />
      <div className="genre-name">{name}</div>
    </div>
  );
}

export default Genre;
