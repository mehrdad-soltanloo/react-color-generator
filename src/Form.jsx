import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#e66465");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          placeholder="#e66465"
        />

        <input type="text" value={color} onChange={handleChange} />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
