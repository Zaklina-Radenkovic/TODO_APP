import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ToDoForm from "./components/Form/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import { DragDropContext } from "react-beautiful-dnd";
import useLocalStorage from "use-local-storage";

import "./App.css";

const getTasks = () => {
  const tasks = localStorage.getItem("toDoList");
  return tasks ? JSON.parse(tasks) : [];
};

function App() {
  const [toDoList, setToDoList] = useState(getTasks());
  // const [toDoList, setToDoList] = useState([])
  const [status, setStatus] = useState("all");

  //storing todos in localstorage
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  //setting dark theme
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // grabbing a new todo (text) from Form
  const listHandler = (enteredText) => {
    setToDoList((prev) => {
      return [enteredText, ...prev];
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(toDoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setToDoList(items);
  };

  return (
    <div className="container" data-theme={theme}>
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="main">
          <Header switchTheme={switchTheme} theme={theme} />
          <ToDoForm onListHandler={listHandler} />
          <ToDoList
            toDoList={toDoList}
            setToDoList={setToDoList}
            status={status}
            setStatus={setStatus}
          />
        </main>
      </DragDropContext>
    </div>
  );
}

export default App;
