import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAdded, todoToggled } from "./features/todos/todosSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (text.trim()) {
      dispatch(todoAdded(text));
      setText("");
    }
  };

  return (
    <div style={{ width: 300, margin: "50px auto", textAlign: "center" }}>
      <h2>Redux Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodoHandler}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(todoToggled(todo.id))}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
