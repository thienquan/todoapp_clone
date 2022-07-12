import React from 'react';
import CheckBox from './CheckBox';

function TodoItem(props) {
  const { data, completed } = props;

  return (
    <li key={data.id} className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`todo-item-check-${data.id}`}
        />
        <label className="form-check-label" htmlFor={`todo-item-check-${data.id}`}>
          <CheckBox checked={completed} />
          {data.text}
        </label>
      </div>
    </li>
  );
}

export default TodoItem;
