function ContentBtn({ name, id, onclick }) {
  return (
    <button className="content-btn" id={id} onClick={onclick}>
      {name}
    </button>
  );
}

export default ContentBtn;
