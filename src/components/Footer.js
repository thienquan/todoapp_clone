import React from 'react';

function Footer(props) {
  const { count } = props;

  return (
    <div className="todo-footer">
      <span className="count-todos">{count}</span>
      {' việc cần làm'}
    </div>
  );
}

export default Footer;
