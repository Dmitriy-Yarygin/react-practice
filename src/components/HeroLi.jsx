import React from "react";
import Paragraf from "./Paragraf";

export default class HeroLi extends React.Component {
  render() {
    const { id, hero, avatar, name } = this.props.elem;
    return (
      <li key = {id}>
        <p>{hero}</p>
        <img src={avatar} />
        <p onClick={this.getNameOnClick}>{name}</p>
        <Paragraf maxTextLength={20} />
      </li>
    );
  }

  getNameOnClick = () => {
	alert(event.target.innerText);
  };
}