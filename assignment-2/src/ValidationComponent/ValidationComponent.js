import React from "react";

const TEXT_MIN_LENGHT = 5;

const validationComponent = props => {
  let textLengthHint = "Text is too short";
  if (props.textLength > TEXT_MIN_LENGHT) {
    textLengthHint = "Text is long enough";
  }
  return <p>{textLengthHint}</p>;
};

export default validationComponent;
