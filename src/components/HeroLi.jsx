import React from "react";
import Paragraf from "./Paragraf";

export default class HeroLi extends React.Component {

  render() {
    const { id, hero, avatar, name } = this.props.elem;
    return (
      <li key={id} className="hero">
        <p>{hero}</p>
        <img src={avatar} />
        <p onClick={this.getNameOnClick} className="hero-name">{name}</p>
        <Paragraf maxTextLength={20} />
      </li>
    );
  }

  getNameOnClick = e => {
    console.log(e.target.innerText);
  };
}
