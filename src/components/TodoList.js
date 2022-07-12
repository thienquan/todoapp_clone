import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { applyFilter } from '~/services/filter';
import FilteredList from './FilteredList';

function TodoList(props) {
  const { items, title, addNew, filter, changeFilter, changeStatus } = props;
  const count = items.length;
  const filteredItems = applyFilter(items, filter);

  return (
    <div className="todolist">
      <Header title={title} addNew={addNew} />
      <FilteredList items={filteredItems} changeStatus={changeStatus} />
      <Footer {...{ count, filter, changeFilter }} />
    </div>
  );
}

export default TodoList;
