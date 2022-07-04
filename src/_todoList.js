import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import ListButtons from "./ListButtons/ListButtons";
import { Droppable } from "react-beautiful-dnd";
import "./ToDoList.css";

export default function ToDoList({ toDoList, setToDoList, status, setStatus }) {
  // const strike = useRef(null)

  // const btnHandler = () => {
  //   // setBtnClass(true)
  //   // strike.current.children[0].style.backgroundColor = 'red'
  //   // console.log(strike.current.children[0], strike.current.children[1])
  //   console.log(strike.current)
  // }
  // console.log(filteredTodoList)

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

  // const editTodo = (id) => {
  //   setToDoList(
  //     toDoList.find((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, editTodo: true, id: id, text: todo.text }
  //       }
  //       return todo
  //     })
  //   )
  // }

  // console.log(filteredTodoList, 'now')
  // const todo =
  //   filtred.map((todo, index) => {
  //   return (
  //     <TodoItem
  //       index={index}
  //       key={todo.id}
  //       // here is our ID
  //       todo={todo}
  //       setToDoList={setToDoList}
  //       toDoList={toDoList}
  //       text={todo.text}
  //     />
  //   )
  // })

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
