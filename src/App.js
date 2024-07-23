import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <form onSubmit={addTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter a to-do"
          />
          <button type="submit">Add To-Do</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

