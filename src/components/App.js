import React, { Component } from 'react';
import TodoList from './TodoList';
import { FILTER_ACTIVE } from '~/services/filter';
import { addToList, createNew, getAll, updateStatus } from '~/services/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: FILTER_ACTIVE,
      items: getAll(),
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
            changeFilter={this.changeFilter.bind(this)}
            changeStatus={this.changeStatus.bind(this)}
            {...this.state}
          />
        </div>
      </div>
    );
  }
  addNew(text) {
    // let item = createNew(text);
    // let updatedList = this.state.items.concat([item]);
    let updatedList = addToList(this.state.items, { text, completed: false });
    this.setState({
      items: updatedList,
    });
  }
  changeFilter(filter) {
    this.setState({ filter });
  }
  changeStatus(itemId, completed) {
    const updatedList = updateStatus(this.state.items, itemId, completed);
    this.setState({ items: updatedList });
  }
}

export default App;
