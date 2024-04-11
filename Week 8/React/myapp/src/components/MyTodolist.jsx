import React from "react";

const myTodolist = ({ items }) => {
  return (
    <div className="todolist">
      <h1>To Do:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default myTodolist;
