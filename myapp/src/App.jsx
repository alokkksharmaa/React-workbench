import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./ToDo/Slice/createSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const add = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Todo App</h2>

      <form onSubmit={add}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter todo"
        />
      </form>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => dispatch(toggleTodo(t.id))}
            />
            {t.text}
            <button onClick={() => dispatch(deleteTodo(t.id))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
