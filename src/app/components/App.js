import {useTodos} from "../store";
import {Todo} from "./App/Todo";

export function App() {
  const [todos, setTodos] = useTodos();
  return <>
    <ul>
      {
        todos.map(
          todo => <Todo key={todo.id} {...todo} />
        )
      }
    </ul>
  </>;
}
