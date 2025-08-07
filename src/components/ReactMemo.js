import React from 'react';

const ReactMemo = React.memo(({ todos, deleteTodo }) => {
  console.log('Rendering ReactMemo');
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos added</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default ReactMemo;
