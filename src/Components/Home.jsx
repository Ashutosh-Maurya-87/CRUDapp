import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [allData, setallData] = useState("");

  useEffect(() => {
    findApiData();
  }, []);

  const findApiData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        const response = res.data.email;
        console.log(response);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div>
      <h3>welcome to the home component</h3>
      <button onClick={findApiData}>get api data</button>
    </div>
  );
};

export default Home;
