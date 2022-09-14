import "./user.css";
import AdminMenu from "../../Layout/AdminMenu/AdminMenu.jsx";

import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
const User = () => {
  const [getUsers, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const getAllUsers = await axios.get("http://localhost:5000/api/users");
        // console.log(getAllUsers.data);
        setUsers(getAllUsers.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);
  return (
    <>
      <AdminMenu />
      <div className="book__content">
        <div className="container__book">
          <table>
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Tài Khoản</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admin</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {getUsers.map((item) => {
                return (
                  <tr key={item._id}>
                    <td data="Tên người dùng">{item.name}</td>
                    <td data="Tài Khoản">{item.username}</td>
                    <td data="Email">{item.email}</td>
                    <td data="Phone">{item.phone}</td>
                    <td data="Admin">{item.isAdmin ? "True" : "False"}</td>
                    <td data="Date">
                      {moment(item.createdAt).format("DD-MM-YYYY")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
