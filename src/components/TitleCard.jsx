function TitleCard({ data, details, type }) {
  let title = data.original_title;
  if (title.length > 40) {
    title = title.substring(0, 37) + "...";
  }
  let ratings = data.vote_count?.toString();
  if (ratings.length > 3) {
    ratings = ratings.substring(0, ratings.length - 3) + "K";
  }
  let runtime = type === "movie" ? Math.round(details.runtime / 60) + "h" + (details.runtime % 60) + "m" : details.episodes;

  return (
    <div className="title-card">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="title-card-img" />
      <h2>{title}</h2>
      <p>{data.overview.substring(0, 45) + "..."}</p>
      <div className="title-card-info">
        <div>{data.release_date.substring(0, 4)}</div>
        <div>{runtime}</div>
        <div>{`${Math.round(data.vote_average * 10) / 10}(${ratings})`}</div>
      </div>
    </div>
  );
}

export default TitleCard;
