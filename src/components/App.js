import React, { useState, useCallback } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [nextId, setNextId] = useState(1);

  const addTodo = () => {
    setTodos([...todos, { id: nextId, task: 'New todo' }]);
    setNextId(nextId + 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const addCustomTodo = () => {
    if (text.length > 5) {
      setTodos([...todos, { id: nextId, task: text }]);
      setNextId(nextId + 1);
      setText('');
    } else {
      alert('Task must be more than 5 characters.');
    }
  };

  const deleteTodo = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, [todos]);

  return (
    <div className="App">

      <h1>Task Management App</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment+</button>
      <p>Counter: {counter}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter custom task" />
      <button onClick={addCustomTodo}>Submit</button>

      <ReactMemo todos={todos} deleteTodo={deleteTodo} />
      <UseMemo count={counter} />
    </div>
  );
};

export default App;
