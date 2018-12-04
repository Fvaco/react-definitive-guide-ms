import React from "react";

const validationComponent = props => {
  const style = {
    fontSize: "1.2em",
    cursor: "pointer",
    display: "inline-block",
    backgroundColor: "whitesmoke",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    borderRadius: "3px",
    border: "1px solid #ccc"
  };
  return <div 
  onClick={props.click}
  style={style}>{props.character}</div>;
};

export default validationComponent;
