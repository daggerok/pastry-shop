import 'rsuite/dist/rsuite';
import 'rsuite/dist/rsuite.css';

import { createRoot } from "react-dom/client";
import { TodoApp } from "./components/TodoApp";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<TodoApp />);
