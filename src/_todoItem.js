import React from "react";
import "./ToDoItem.css";
import cross from "../../../images/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
// import { EditText } from 'react-edit-text'

const ToDoItem = ({ text, index, todo, setToDoList, filtred }) => {
  const [checked, setChecked] = useState(false);
  // const [isEditing, setIsEditing] = useState(false)
  // const [editId, setEditId] = useState(null)
  // const [name, setName] = useState('')
  // const inputRef = useRef(null)

  const [editText, setEditText] = useState(text);

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
          // console.log(item, 'completeHandler')
          return { ...item, completed: !item.completed };
        }
        console.log(item, "completeHandler");
        return item;
      })
    );
  };

  // const editTodo = (id) => {
  //   const { name } = toDoList.find((todo) => todo.id === todo.id)
  //   setIsEditing(true)
  //   setEditId(id)
  //   setName(name)
  //   inputRef.current.focus()
  // }
  const editTodo = () => {
    const selectedTodo = filtred.find((item) => {
      if (item.id === todo.id) {
        console.log({ ...item, editTodo: !item.editTodo, text: item.text });
        // console.log(item)
      }
    });
  };

  //   setToDoList(
  //     filtred.find((item) => {
  //       if (item.id === id) {
  //         // console.log(item)
  //         // return [...filtred, { ...todo, editTodo: true, id: id, text: text }]
  //       }
  //       return item
  //     })
  //   )
  // }

  // const handleSave = () => {
  //   // console.log(editText)
  //   setEditText(editText)
  //   editTodoHandler(editText)
  // }

  // const handleSave = ({ name, value, previousValue }) => {
  //   // alert(name + ' saved as: ' + value + ' (prev: ' + previousValue + ')')
  //   setEditText(editText)
  // }

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`todo ${snapshot.isDragging ? "drag" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* <Button
            type='btn'
            className='btn'
            onCompleteHandler={completeHandler}
          /> */}

          <input
            type="checkbox"
            name="checkbox"
            checked={todo.completed}
            onChange={completeHandler}
          />
          <label>
            <li
              className={`todo_item ${todo.completed ? "completed" : ""}`}
              onDoubleClick={() => editTodo()}
            >
              {/* <EditText
                // style={{ display: 'inline', margin: 10 }}
                // onChange={handleSave}
                onChange={handleSave}
                inline
                defaultValue={text}
                // value={editText}
                // onSave={()=>handleSave}
              > */}
              {text}
              {/* </EditText> */}
            </li>
          </label>
          <button className="trash-btn" onClick={removeItem}>
            <img src={cross} />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ToDoItem;
