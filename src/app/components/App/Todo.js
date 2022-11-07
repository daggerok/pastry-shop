import {useTodos} from "../../store";

export const Todo = ({id, task, completed}) => {
  const [todos, setTodos] = useTodos();
  const toggleTodo = id => {
    setTodos([
      ...todos.map(
        todo => todo.id !== id ? todo : ({ ...todo, completed: !todo.completed })
      ),
    ]);
  };
  const todoStyles = completed ? { textDecoration: 'line-through' } : {};
  return <li key={id} onClick={() => toggleTodo(id)} style={todoStyles}>
    {task}
  </li>;
}
