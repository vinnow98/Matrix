// src/DogFacts.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

const DogFacts = ({ searchQuery }) => {
  const [fact, setFact] = useState([]);
  const apiKey = "AIzaSyCwyr19n2XoMx_9lFCJJjQvE8xvrX0vGN8";
  useEffect(() => {
    if (!searchQuery) {
      axios
        .get(
          `https://tenor.googleapis.com/v2/search?q=hello&key=${apiKey}&client_key=my_test_app&limit=8`
        )
        .then((result) => {
          setFact(result.data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .get(
          `https://tenor.googleapis.com/v2/search?q=${searchQuery}&key=${apiKey}&client_key=my_test_app&limit=8`
        )
        .then((result) => {
          setFact(result.data.results);
        })
        .catch((err) => {
          console.error("Error fetching data:", error.message);
        });
    }
  }, [searchQuery]);

  return (
    <div>
      <div className=" col-10 shadow mx-auto">
        {fact.map((element, index) => (
          <Image
            key={index}
            src={element.media_formats.gif.url}
            alt="img"
            className="col-3 img-thumbnail"
            style={{ height: "150px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default DogFacts;
