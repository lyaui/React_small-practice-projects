import React from 'react';
import { useTodoValue } from '../store/todo-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const { items, removeTodo } = useTodoValue();
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} id={item.id} removeTodoHandler={removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
