function Card({ src, name, checked, onChange }) {
  return (
    <div className="service" onClick={onChange}>
      <img src={src} className="service-logo" />
      <div className="checkbox">
        <input type="checkbox" checked={checked} />
        {name}
      </div>
    </div>
  );
}

export default Card;
