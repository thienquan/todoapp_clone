import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'active',
      items: [
        {
          id: 1,
          text: 'Ghi chép chi tiêu trong ngày',
          completed: false,
        },
        {
          id: 2,
          text: 'Mua kệ cho vk',
          completed: false,
        },
        {
          id: 3,
          text: 'Code dự án cty',
          completed: false,
        },
      ],
    };
  }
  render() {
    const title = 'Công việc cần làm';
    return (
      <div className="container">
        <div className="row">
          <TodoList
            title={title}
            addNew={this.addNew.bind(this)}
            items={this.state.items}
            {...this.state}
          />
        </div>
      </div>
    );
  }
  addNew(text) {
    let nextId = this.state.items.length + 1;
    let item = {
      id: nextId,
      text: text,
    };
    let updatedList = this.state.items.concat([item]);
    this.setState({
      items: updatedList,
    });
  }
}

export default App;
