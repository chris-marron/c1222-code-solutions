/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => {
        setError('Network call failed');
        console.error(error);
      });

  }, []);

  function addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    *   - create a shallow copy of the todos array from state
    *   - add the todo received from the server to the copied array
    *   - replace the old todos array in state with the new one
    *
    * DO NOT MUTATE the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(newTodo), headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then(data => setTodos(todos.concat(data)))
      .catch(error => {
        setError(error.message);
        console.error(error);
      });
  }

  function toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const index = todos.findIndex(todo => todo.todoId === todoId);
    const isCompleted = todos[index].isCompleted;
    const newTodo = { isCompleted: !isCompleted };
    fetch(`/api/todos/${todoId}`, { method: 'PATCH', body: JSON.stringify(newTodo), headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then(data => setTodos(todos.map(todo => todo.todoId === todoId ? data : todo)))
      .catch(error => {
        setError(error.message);
        console.error(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          {error && <p>{error}</p>}
          {!error && <PageTitle text="Todo App" />}
          {!error && <TodoForm onSubmit={addTodo} />}
          {!error && <TodoList todos={todos} toggleCompleted={toggleCompleted} />}
        </div>
      </div>
    </div>
  );
}
