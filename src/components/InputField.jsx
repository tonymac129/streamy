function InputField({ label, placeholder, value, onchange }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input type="text" className="input-bar" value={value} placeholder={placeholder} autoComplete="off" onChange={onchange} />
    </div>
  );
}

export default InputField;
