import React from "react";
import "./ToDoItem.css";
import cross from "../../../images/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";

const ToDoItem = ({ text, index, todo, setToDoList, filtred }) => {
  const removeItem = () => {
    setToDoList((prev) => {
      let newToDos = prev.filter((item) => item.id !== todo.id);
      return newToDos;
    });
  };

  const completeHandler = () => {
    setToDoList(
      filtred.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  };

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`todo ${snapshot.isDragging ? "drag" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input
            type="checkbox"
            name="checkbox"
            checked={todo.completed}
            onChange={completeHandler}
          />
          <label>
            <li className={`todo_item ${todo.completed ? "completed" : ""}`}>
              {text}
            </li>
          </label>
          <button className="trash-btn" onClick={removeItem}>
            <img src={cross} alt="" />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ToDoItem;
