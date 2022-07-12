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
  clear() {
    this.setState({ value: '' });
  }
  handleKeyUp(e) {
    const { addNew } = this.props;
    const text = this.state.value.trim();
    if (e.keyCode === KeyCode.KEY_RETURN && text) {
      addNew(text);
      this.clear();
    }
  }
  render() {
    return (
      <input
        type="text"
        className="form-control add-todo"
        onKeyUp={this.handleKeyUp.bind(this)}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        placeholder="Thêm mới"
      />
    );
  }
}

export default InputBox;
