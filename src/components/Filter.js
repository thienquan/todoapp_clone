import React from 'react';

const option = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

export const Filter = (props) => {
  const { filter } = props;

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(option).map((key, index) => (
        <li key={index}>
          <a className={key === filter ? 'selected' : ''}>{option[key]}</a>
        </li>
      ))}
    </ul>
  );
};
