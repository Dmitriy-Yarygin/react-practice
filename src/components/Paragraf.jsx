import React from "react";

export default class Paragraf extends React.Component {
  state = {
    isTrimmed: true
  };

  static defaultProps = {
    maxTextLength: 33,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum leo euismod gravida accumsan. Nulla accumsan velit sed euismod blandit. Aliquam gravida ante sed eros."
  };

  render() {
    const maxTextLength = this.props.maxTextLength;
    let content = this.props.content;
    if (this.state.isTrimmed && content.length > maxTextLength) {
      content = `${content.substr(0, maxTextLength - 3)}...`;
    }
    return (
      <p onClick={this.handleClick} className="hero-description">
        {content}
      </p>
    );
  }

  handleClick = () => {
    this.setState({ isTrimmed: !this.state.isTrimmed });
  };
}
