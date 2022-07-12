import React from 'react';
import Filter from './Filter';

export default function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <div className="todo-footer clearfix">
      <div className="float-start">
        <strong>
          <span className="count-todos">{count}</span>
          {' việc cần làm'}
        </strong>
      </div>
      <div className="float-end">
        <Filter filter={filter} change={changeFilter} />
      </div>
    </div>
  );
}
