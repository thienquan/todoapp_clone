import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { items, title, addNew } = props;
  const count = items.length;

  return (
    <div className="todolist">
      <Header title={title} addNew={addNew} />
      <ul className="list-group list-group-flush">
        {items.map((item) => (
          <TodoItem key={item.id} data={item} />
        ))}
      </ul>
      <Footer count={count} />
    </div>
  );
}

export default TodoList;
