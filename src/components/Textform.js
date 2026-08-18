import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const upperCaseHandler = () => {
    const upperCaseText = text.toUpperCase();

    setText(upperCaseText);

    props.showAlert("Converted to uppercase!", "success");
  };

  const lowerCaseHandler = () => {
    const lowerCaseText = text.toLowerCase();

    setText(lowerCaseText);

    props.showAlert("Converted to lowercase!", "success");
  };

  const trimSpacesHandler = () => {
    const textAfterTrimming = text.replace(/\s+/g, "");

    setText(textAfterTrimming);

    props.showAlert("Trimmed all spaces!", "success");
  };

  const removeExtraSpaceHandler = () => {
    const extraSpacesRemovedText = text.trim().replace(/\s+/g, " ");

    setText(extraSpacesRemovedText);

    props.showAlert("Removed extra spaces!", "success");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      props.showAlert("Copied to clipboard!", "success");
    } catch (error) {
      props.showAlert("Failed to copy text!", "danger");
    }
  };

  const showChangedText = (event) => {
    setText(event.target.value);
  };

  const countWords = text
    .trim()
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;

  const countCharacters = text.length;

  const timeToReadOneWord = 0.008;

  const minutesRead = timeToReadOneWord * countWords;

  return (
    <>
      <div
        className="container my-5"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={showChangedText}
            id="myBox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "light" ? "#F3F4F6" : "white",
            }}
          ></textarea>
        </div>

        <button
          className={`btn btn-${
            props.mode === "light" ? "secondary" : "primary"
          }`}
          onClick={upperCaseHandler}
          disabled={text.length === 0}
        >
          Convert to UpperCase
        </button>

        <button
          className={`btn btn-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-2`}
          onClick={lowerCaseHandler}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>

        <button
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-2`}
          onClick={trimSpacesHandler}
          disabled={text.length === 0}
        >
          Trim Spaces
        </button>

        <button
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-2`}
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>

        <button
          type="button"
          className={`btn btn-${
            props.mode === "light" ? "secondary" : "primary"
          } my-2`}
          onClick={removeExtraSpaceHandler}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>

        <p>
          {countWords} words and {countCharacters} characters
        </p>

        <p>{minutesRead.toFixed(2)} Minutes read</p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Enter some text in the textform to preview it here."}
        </p>
      </div>
    </>
  );
}