import { ListItems } from './TodoApp/ListItems';

const todos = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Drink wine', completed: true },
];

export function TodoApp() {
  return <ul>
    <ListItems todos={todos} />
  </ul>;
}
