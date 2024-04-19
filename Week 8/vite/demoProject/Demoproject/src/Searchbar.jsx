import React from "react";

const Searchbar = ({ onSearch }) => {
  const submit = (e) => {
    e.preventDefault();

    onSearch(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={submit} className="d-flex">
        <label htmlFor="search" className="me-2 mt-2">
          Search for Gifs!
        </label>
        <input type="text" placeholder="Search" className="me-2" />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
