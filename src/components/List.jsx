import React from "react";

export default class List extends React.Component {

  static defaultProps = {
    arrayOfObjects: [],
    elemChoice: "ul",
    getJSX: element => <li key={element.id}> {element.name}</li>
  }

  render() {
    const { arrayOfObjects, elemChoice, getJSX } = this.props;
    const listItems = arrayOfObjects.map(getJSX);

    if (elemChoice === "div") {
      return <div className="List">{listItems}</div>;
    }
    return <ul className="List">{listItems}</ul>;
  }
}
