import React from "react";

export default class Paragraf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrimmed: true
    };
  }

  render() {
    const maxTextLength = this.props.maxTextLength;
    const loremipsum =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum leo euismod gravida accumsan. Nulla accumsan velit sed euismod blandit. Aliquam gravida ante sed eros.";
    let content = loremipsum;
    if (this.state.isTrimmed) {
      content = `${loremipsum.substr(0, maxTextLength-3)}...`;
    }
    return <p onClick={this.handleClick}>{content}</p>;
  }

  handleClick = () => {
    this.setState({ isTrimmed: !this.state.isTrimmed });
  };
}
