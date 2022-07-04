import React from "react";
import "./ListButtons.css";
import { useState, useEffect } from "react";

const ListButtons = ({ toDoList, setStatus, deleteCompletedHandler }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const completed = toDoList.filter((item) => item.completed).length;

    setCount(toDoList.length - completed);
  }, [toDoList]);

  const filterTasks = (e) => {
    setStatus(e.target.dataset["filter"]);
  };

  return (
    <div className="list">
      <p>
        <span>{count}</span> items left
      </p>
      <div>
        <button
          className="list_btns list_btn--all"
          data-filter="all"
          onClick={filterTasks}
        >
          All
        </button>
        <button
          className="list_btns list_btn--active"
          data-filter="active"
          onClick={filterTasks}
        >
          Active
        </button>
        <button
          className="list_btns list_btn--completed"
          data-filter="completed"
          onClick={filterTasks}
        >
          Completed
        </button>
      </div>
      <button
        className="list_btns list_btn--clear"
        onClick={deleteCompletedHandler}
      >
        Clear completed
      </button>
    </div>
  );
};
export default ListButtons;
