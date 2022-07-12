import React from 'react';
import { Filter } from './Filter';

function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <div className="todo-footer clearfix">
      <div className="pull-left">
        <strong>
          <span className="count-todos">{count}</span>
          {' việc cần làm'}
        </strong>
      </div>
      <div className="pull-right">
        <Filter {...{ filter, changeFilter }} />
      </div>
    </div>
  );
}

export default Footer;
