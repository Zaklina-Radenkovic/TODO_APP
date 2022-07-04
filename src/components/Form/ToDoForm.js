import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ onListHandler }) => {
  const [text, setText] = useState("");

  //submiting input text as todo
  const textSubmitHandler = (e) => {
    e.preventDefault();

    const todo = {
      text: text,
      completed: false,
      id: Math.random().toString(),
    };

    onListHandler(todo);
    setText("");
  };

  return (
    <form className="todo_container" onSubmit={textSubmitHandler}>
      <Button type={"" || "submit"} className={"" || "btn-sbm"} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
};
export default ToDoForm;
