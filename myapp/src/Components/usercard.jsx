// components are like function , 2 types :- 1. Function Based -- mostly used , 2. Class Based // components :- In ReactJS, components are the fundamental building blocks of the user interface.
// Function-based component (rafce shortcut)

// className used for adding more functionalities to the particular item

// filename:- usercard.jsx
import React from "react";
import "./usercard.css";

const UserCard = (props) => {
  return (
    <div className="user-card" style= {props.style}>
      <img className="user-img" src={props.img} alt={props.name} />
      <h2 className="user-name">{props.name}</h2>
      <p className="user-description">{props.desc}</p>
    </div>
  );
};

export default UserCard;