import React, { Component } from 'react';
import * as KeyCode from 'keycode-js';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleKeyUp(e) {
    if (e.keyCode === KeyCode.KEY_RETURN) {
      console.log(this.state.value);
      // Clear the text box
    }
  }
  render() {
    return (
      <input
        type="text"
        className="form-control add-todo"
        onKeyUp={this.handleKeyUp.bind(this)}
        onChange={this.handleChange.bind(this)}
        placeholder="Thêm mới"
      />
    );
  }
}

export default InputBox;
