import React from "react";

const NewTask = ({ onAddItem }) => {
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const newItem = {
      id: Math.random(),
      name: event.target[0].value,
      description: event.target[1].value,
    };

    onAddItem(newItem);
    // event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTask;
