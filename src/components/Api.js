import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Usersdata from "../components/Usersdata";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setloading(false);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(`Error message is ${error}`);
      setloading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return <Usersdata users={users} />;
};

export default Api;
