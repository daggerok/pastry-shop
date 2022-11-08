/*
let todos = [
    { task: 'Learn React', id: 1, completed: false },
    { task: 'Drink wine', id: 2, completed: true },
];

let result = todos.map(todo => <li>{todo.task}</li>);

<li>Learn React</li>
<li>Drink wine</li>
*/

import { Task } from "./ListItems/Task";

export const ListItems = ({ todos }) => <>
    {
        todos.map(
            todo => <Task description={todo.task} key={todo.id} />
        )
    }
</>;
