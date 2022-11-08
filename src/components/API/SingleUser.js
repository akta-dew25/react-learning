import React, { useState, useEffect } from "react";

function SingleUser({ id }) {
  const [singleUserApi, setSingleUserApi] = useState(id);

  const getUser = () => {
    fetch(`https://reqres.in/api/users/2`)
      .then((response) => response.json())
      .then((singleData) => {
        setSingleUserApi(singleData.support);
      });
  };
  useEffect(() => {
    //api with id
    // set state for single user
  }, [id]);

  return <></>;
}

export default SingleUser;
