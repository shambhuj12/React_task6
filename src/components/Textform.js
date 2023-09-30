import React, { useState } from "react";
import { useEffect } from "react";

export default function Textform(props) {
  const [text, setText] = useState();

  useEffect(() => {
    setText(""); // This will update the text after the initial render
  }, []);

  const handleUpClick = () => {
    console.log("Button Pressed " + text);

    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <div>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              {props.heading}
            </label>
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="10"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
        </form>
      </div>
    </div>
  );
}
