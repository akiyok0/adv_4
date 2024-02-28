import React from 'react';
import { useTodoList } from '../context/TodoContext';
import '../components/TodoList.css';

function Completed() {
  const { todos, setTodos } = useTodoList();

  const todoList = () => {
    return todos.filter((todo) => todo?.complete);
  };

  const undoComplete = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, complete: false } : todo
      );
    });
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul>
        {todoList().map((todo, i) => (
          <div className="complete-container" key={i}>
            <li>
              <div className='complete-2'>
                <div className='complete-text'>{todo.text}</div>
                <div className='complete-buttons'>  
                  <button onClick={() => undoComplete(todo.id)}>Undo</button>
                  <button onClick={() => onDelete(todo.id)}>Delete</button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
