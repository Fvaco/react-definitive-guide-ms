import React from "react";

const userInput = props => {
  const style = {
    border: "none",
    backgroundColor: "#ccc",
    fontWeight: "medium",
    fontSize: "1.4em",
    padding: "10px",
    margin: "5px"
  }
  return <input placeholder="Type a username..." style={style} type="text" onChange={props.changed} value={props.userName} />;
};

export default userInput;
