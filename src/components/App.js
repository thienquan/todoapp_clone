import React, { Component } from 'react';
import TodoList from './TodoList';
import { FILTER_ACTIVE } from '~/services/filter';
import { createNew, getAll } from '~/services/todo';

class App extends Component {
  constructor(props) {
    super(props);

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
            items={this.state.items}
            changeFilter={this.changeFilter.bind(this)}
            {...this.state}
          />
        </div>
      </div>
    );
  }
  addNew(text) {
    let item = createNew(text);
    let updatedList = this.state.items.concat([item]);
    this.setState({
      items: updatedList,
    });
  }
  changeFilter(filter) {
    this.setState(filter);
  }
}

export default App;
