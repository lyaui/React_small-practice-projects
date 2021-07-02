import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; id: string; removeTodoHandler: (id: string) => void }> = (
  props,
) => {
  const removeItemHandler = (id: string) => {
    props.removeTodoHandler(id);
  };
  return (
    <li className={classes.item} onClick={() => removeItemHandler(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
