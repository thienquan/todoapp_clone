import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }
  render() {
    return <input className="form-check-input" type="checkbox" checked="{this.state.checked}" />;
  }
}

export default CheckBox;
