import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [showResult, setshowResult] = useState("initial result");
  const [users, updateUsers] = useState({
    page: 1,
    data: [],
    total_page: 1,
    total: 1,
    per_page: 6,
  });
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=2`)
      .then((data) => {
        updateUsers({ ...data.data });
      })
      .catch((err) => {
        console.log(`error`, err);
      });
  }, []);
  const createUser = () => {
    axios
      .post(`https://reqres.in/api/users?page=2`, {
        name: "ashutosh maurya",
        job: "react developer",
      })
      .then(() => {});
  };

  return (
    <div>
      <h3>welcome to the home component</h3>
      <button>get api data</button>
      {users.data &&
        users.data.map((user) => (
          <div>
            <p>
              {user.id}
              {user.first_name}
            </p>
          </div>
        ))}
      <button onClick={createUser}>create user</button>
    </div>
  );
};

export default Home;
