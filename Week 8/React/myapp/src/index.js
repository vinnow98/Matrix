import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewTask from "./components/NewTask";
import MyTodolist from "./components/MyTodolist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
