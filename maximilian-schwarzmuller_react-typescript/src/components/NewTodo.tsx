import { useRef } from 'react';
import { useTodoValue } from '../store/todo-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useTodoValue();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;
    if (!enteredText.trim().length) return;
    addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
