function Icons({ className = "" }) {
  function github() {
    window.open("https://github.com/tonymac129", "_blank");
  }
  function toggleMode() {
    document.body.classList.toggle("light");
  }

  return (
    <div className={"icons " + className}>
      <img src="/icons/mode.svg" title="Toddle dark mode" onClick={toggleMode} />
      <img src="/icons/github.svg" title="GitHub" onClick={github} />
    </div>
  );
}

export default Icons;
