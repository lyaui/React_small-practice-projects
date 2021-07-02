import { createContext, FC, useState, useContext } from 'react';
import Todo from '../models/todo';

type todosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = createContext<todosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((preTodo) => [...preTodo, newTodo]);
  };
  const removeTodoHandler = (id: string) => {
    setTodos((preTodo) => preTodo.filter((item) => item.id !== id));
  };
  const contextValue: todosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};

export const useTodoValue = () => useContext(TodoContext);

export default TodoContextProvider;
