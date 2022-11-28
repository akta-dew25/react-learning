import { useEffect, useState } from "react";
// import "./App.css";
import UserDetails from "./UserDetails";
import UserList from "../Style/UserList.css";
import axios from "axios";
// import Modal from "antd/lib/modal/Modal";
import { Button, Table, Modal } from "antd";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setloading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpenUser, setIsOpenUser] = useState(false);

  // const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchData = async () => {
    setloading(true);
    let userData = await axios.get(`https://reqres.in/api/users`);

    const data = userData?.data?.data.map((row) => ({
      id: row.id,
      image: row.avatar,
      fName: row.first_name,
      lName: row.last_name,
      email: row.email,
    }));
    console.log(data);
    setUserList(data);
    console.log({ userData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setIsOpenUser(!isOpenUser);
  };

  useEffect(() => {
    alert(isOpenUser);
  }, [isOpenUser]);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 200,
      render: (_, record) => {
        return (
          <img src={record.image} style={{ width: "100px", height: "100px" }} />
        );
      },
    },
    {
      title: "First Name",
      dataIndex: "fName",
      key: "fName",
      width: 200,
    },
    {
      title: "Last Name",
      dataIndex: "lName",
      key: "lName",
      width: 200,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "User Details",
      dataIndex: "details",
      key: "details",
      render: (_, record) => {
        console.log({ record });
        return (
          <Button type="primary" onClick={() => setSelectedUser(record?.id)}>
            Details
          </Button>
        );
      },
    },
  ];

  return (
    <>
      {/* {selectedUser ? <SingleUser id={selectedUser} /> : null} */}

      <Table columns={columns} dataSource={userList} pagination={false} />
      <Modal
        title="User List"
        open={selectedUser !== null}
        onCancel={() => setSelectedUser(null)}
        className="user"
        onOk={() => setSelectedUser(null)}
        closeIcon={
          <div
            onClick={() => {
              setIsOpenUser(false);
            }}
          >
            X
          </div>
        }
      >
        <UserDetails
          id={selectedUser}
          // modalData={modalData}
          // setIsModalVisible={setIsModalVisible}
        />
      </Modal>
    </>
  );
}

export default App;
