import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="new-todo-form">
        <input
          className="new-todo-input"
          type="text"
          value={inputValue}
          placeholder="type your new todo here"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="new-todo-button">Create Todo</button>
      </div>
    </>
  );
};

export default NewTodoForm;
