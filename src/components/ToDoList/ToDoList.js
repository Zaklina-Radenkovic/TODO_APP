import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import ListButtons from "./ListButtons/ListButtons";
import { Droppable } from "react-beautiful-dnd";
import "./ToDoList.css";

export default function ToDoList({ toDoList, setToDoList, status, setStatus }) {
  let filtred = [...toDoList];

  switch (status) {
    case "all":
      filtred = [...toDoList];
      break;
    case "completed":
      filtred = toDoList.filter((task) => task.completed);
      break;
    case "active":
      filtred = toDoList.filter((task) => !task.completed);
      break;
    default:
      filtred = [...toDoList];
  }

  const deleteCompletedHandler = () => {
    const completed = filtred.filter((item) => !item.completed);
    setToDoList(completed);
  };

  return (
    <div className="todos_list">
      <Droppable droppableId="ToDoList">
        {(provided, snapshot) => (
          <ul
            className={`todo_list ${
              snapshot.isDraggingOver ? "dragactive" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filtred.map((todo, index) => {
              return (
                <ToDoItem
                  key={todo.id}
                  index={index}
                  todo={todo}
                  setToDoList={setToDoList}
                  filtred={filtred}
                  text={todo.text}
                />
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <ListButtons
        toDoList={toDoList}
        setStatus={setStatus}
        deleteCompletedHandler={deleteCompletedHandler}
      />
    </div>
  );
}
