import React, { useState, useEffect } from "react";
import "./Quote.css";
import axios from "axios";

const Quote = () => {
  const [myQuote, setQuote] = useState("");
  const URL = "https://api.quotable.io/random";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(URL)
      .then((result) => {
        console.log(result);
        setQuote(result.data.content);
      })
      .catch((error) => {
        console.log("Error fetching quote:", error.message);
      });
  };

  return (
    <div id="quoteDiv">
      <div id="quote">{myQuote}</div>
      <button type="button" onClick={fetchData}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;

const URL = "https://api.quotable.io/random";
