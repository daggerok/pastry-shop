import { atom, useAtom } from "jotai"

const todosAtom = atom([
  {
    id: `${Date.now()}`,
    task: 'Learn jotai',
    completed: false,
  },
]);

export const useTodos = () => useAtom(todosAtom);
