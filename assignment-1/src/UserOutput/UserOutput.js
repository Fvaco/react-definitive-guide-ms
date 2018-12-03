import React from 'react';

import "./UserOutput.css";

const userOutput =  ({userName}) => {
  return (
    <div className="UserOutput">
      <p>Assignment 1</p>
      <p title={userName}>Username: {userName}</p>
    </div>
  );
}

export default userOutput;