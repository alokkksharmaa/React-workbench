import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, section, place } = this.props; // Destructuring

    return (
      <div className="p-1 bg-white shadow-lg rounded-lg text-center w-50">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>Section {section}</p>
        <p>Place: {place}</p>
      </div>
    );
  }
}

export default Card;
