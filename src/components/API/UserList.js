import { useEffect, useState } from "react";
// import "./App.css";
import SingleUser from "./SingleUser";

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = () => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setUserList(actualData.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Email Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Image</th>
          <th>User Detail</th>
        </tr>
        {userList?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>
              <img src={item.avatar} alt="" height={100} />
            </td>
          </tr>
        ))}
      </tbody>
      <SingleUser id={selectedUser} />
    </>
  );
}

export default App;
