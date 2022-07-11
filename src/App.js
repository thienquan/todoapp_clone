import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>Công việc cần làm</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-1" />
                <label className="form-check-label" htmlFor="todo-item-check-1">
                  Ghi chép chi tiêu trong ngày
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-2" />
                <label className="form-check-label" htmlFor="todo-item-check-2">
                  Mua kệ cho vk
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-3" />
                <label className="form-check-label" htmlFor="todo-item-check-3">
                  Làm việc
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
