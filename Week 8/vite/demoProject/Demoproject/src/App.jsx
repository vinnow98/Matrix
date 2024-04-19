// src/App.js
import React, { useState } from "react";
import DogFacts from "./DogFacts";
import Searchbar from "./Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (searchterm) => {
    setSearchQuery(searchterm);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>My Gifs</h2>
      <Searchbar onSearch={handleSearch} />
      <DogFacts searchQuery={searchQuery} />
    </div>
  );
};

export default App;
