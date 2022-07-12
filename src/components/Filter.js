import React from 'react';
import { getOption } from '~/services/filter';

const option = getOption();

export const Filter = (props) => {
  const { filter, changeFilter } = props;
  const getClass = (key) => (key === filter ? 'selected' : '');

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(option).map((key, index) => (
        <li key={index}>
          <a onClick={() => changeFilter(key)} className={getClass(key)}>
            {option[key]}
          </a>
        </li>
      ))}
    </ul>
  );
};
