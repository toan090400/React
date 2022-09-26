import MainMenu from "../../Layout/MainMenu.jsx";
import AuthContext from "../../../context/auth-context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
const User = () => {
  const context = useContext(AuthContext);
  const AccessToken = context.isUser.accessToken;
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        if (AccessToken) {
          const getAllUsers = await axios.get(
            `http://localhost:5000/api/users`,
            {
              headers: { token: `Bearer ${AccessToken}` },
            }
          );
          setUsers(getAllUsers.data.users);
        }
      } catch (error) {
        setMessage(error.response.data.message);
        console.log(error);
      }
    };
    getAllUsers();
  }, [AccessToken]);
  const handlerClick = async (data) => {
    try {
      const idDelete = data._id;
      const deleteItem = await axios.delete(
        `http://localhost:5000/api/users/${idDelete}`,
        {
          headers: { token: `Bearer ${AccessToken}` },
        }
      );
      setMessage(deleteItem.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <MainMenu />
        <h1>User</h1>
        {message}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">username</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.username}</td>
                  <td onClick={() => handlerClick(item)}>delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
