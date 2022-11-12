import { useEffect, useState } from "react";
// import "./App.css";
import SingleUser from "./SingleUser";
import UserList from "../Style/UserList.css";
import axios from "axios";
import Modal from "antd/lib/modal/Modal";

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchData = async () => {
    let userData = await axios.get(`https://reqres.in/api/users`);

    setUserList(userData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const showModal = () => {
  //   // setmodaldata(record);
  //   setIsModalVisible(true);
  // };

  return (
    <>
      {selectedUser ? <SingleUser id={selectedUser} /> : null}

      <div>
        <table>
          <tbody>
            <tr style={{ border: "1px solid black" }}>
              <th>Id</th>
              <th>Email Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Image</th>
              <th>Details</th>
            </tr>
            {userList?.data?.map((list, index) => (
              <tr
                key={index}

                // style={{ border: "1px solid black" }}
              >
                <td>{list.id}</td>
                <td>{list.email}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td>
                  <img src={list.avatar} alt="" height={100} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedUser(list.id);
                    }}
                  >
                    Open Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
