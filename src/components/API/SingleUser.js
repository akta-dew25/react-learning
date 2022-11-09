import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleUser({ id }) {
  const [singleUserApi, setSingleUserApi] = useState(null);

  const getUser = async (userid) => {
    let userDetails = await axios.get(`https://reqres.in/api/users/${userid}`);
    setSingleUserApi(userDetails?.data);
  };
  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <div>
      <h1>{singleUserApi?.data?.email || "No Email Found"}</h1>
    </div>
  );
}

export default SingleUser;
