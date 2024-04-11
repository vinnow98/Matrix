import React, { useState } from "react";
import MyTodolist from "./components/MyTodolist";
import NewTask from "./components/NewTask";

function App() {
  // Define state for your local database
  const [items, setItems] = useState([
    { id: 1, name: "Walk dog", description: "1Lorem ipsum" },
    { id: 2, name: "Wash dishes", description: "lorem ipsum" },
  ]);

  // Function to handle submission of the new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <MyTodolist items={items} />
      <NewTask onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
