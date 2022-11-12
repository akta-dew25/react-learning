import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "antd";

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
    <>
      <table>
        <tbody>
          <tr>
            <td>{singleUserApi?.data?.id}</td>
            <td>{singleUserApi?.data?.email}</td>
            <td>{singleUserApi?.data?.first_name}</td>
            <td>{singleUserApi?.data?.last_name}</td>
            <td>
              <img src={singleUserApi?.data?.avatar} alt="" height={100} />
            </td>
            <td>{singleUserApi?.support?.url}</td>
            <td>{singleUserApi?.support?.text}</td>
          </tr>
        </tbody>
      </table>
      ;
    </>
  );
}

export default SingleUser;
