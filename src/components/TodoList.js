import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';
import { applyFilter } from '~/services/filter';

function TodoList(props) {
  const { items, title, addNew, filter, changeFilter } = props;
  const count = items.length;

  const filteredList = applyFilter(items, filter);

  return (
    <div className="todolist">
      <Header title={title} addNew={addNew} />
      {filteredList.length > 0 ? (
        <ul className="list-group list-group-flush">
          {filteredList.map((item) => (
            <TodoItem key={item.id} data={item} />
          ))}
        </ul>
      ) : (
        <p className="alert alert-info">Hôm nay chắc rãnh</p>
      )}
      <Footer {...{ count, filter, changeFilter }} />
    </div>
  );
}
export default TodoList;
