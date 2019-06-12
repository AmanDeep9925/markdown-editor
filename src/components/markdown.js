import React, { Component } from "react";
import Remarkable from "remarkable";

class markdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "Start your Markdown's here!"
    };
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div className='container'>
        <div className='input'>
          <h3>Input</h3>
          <textarea
            className='input-text'
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className='output'>
          <h3>MarkDown</h3>
          <div
            dangerouslySetInnerHTML={this.getRawMarkup()}
            className='output-text'
          />
        </div>
      </div>
    );
  }
}
export default markdown;
