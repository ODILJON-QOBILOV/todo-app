import React, { useState } from "react";
import deleteImage from "./assets/delete_forever_24dp_FILL0_wght400_GRAD0_opsz24(1).svg";
import checkIcon from "./assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo("");
    } else {
      alert("there is no any todo!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };


  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="box">
        <h1>Todo List</h1>
        <div className="new-plan">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={addTodo}>+</button>
        </div>
        <div className="todos">
          {todos.map((todo, index) => (
            <div key={index} className={todo.done ? "todo-done" : "todo"}>
              <p className="todo-text">
                {index + 1}. {todo.text}
              </p>
              <div className="images">
                <div className="done" onClick={() => toggleDone(index)}>
                  <img src={checkIcon} alt="Done" />
                </div>
                <div className="delete" onClick={() => deleteTodo(index)}>
                  <img src={deleteImage} alt="Delete" width={23} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;