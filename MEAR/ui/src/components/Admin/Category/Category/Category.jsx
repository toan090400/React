import "./category.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";

import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const [getStatus, setStatus] = useState(true);
  const [getCategorys, setCategorys] = useState([]);
  useEffect(() => {
    const getAllCategorys = async () => {
      try {
        const getAllCategorys = await axios.get(
          "http://localhost:5000/api/categorys"
        );
        setCategorys(getAllCategorys.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategorys();
  }, [getStatus]);
  // delete
  const handleClick = async (data) => {
    try {
      await axios.delete(`http://localhost:5000/api/categorys/${data._id}`);
      setStatus(!getStatus);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AdminMenu />
      <div className="book__content">
        <div className="container__book">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>User Create</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getCategorys.map((item) => {
                return (
                  <tr key={item._id}>
                    <td data="Name">{item.name}</td>
                    <td data="Description">{item.description}</td>
                    <td data="Date">
                      {moment(item.createdAt).format("DD-MM-YYYY")}
                    </td>
                    {/* {console.log(item.user.email)} */}
                    <td data="User Create">
                      {item.user ? item.user.username : "No"}
                    </td>
                    <td data="Update" className="link">
                      <Link to={`/CategoryUpdate/${item._id}`} className="a">
                        Update
                      </Link>
                    </td>
                    <td data="Delete">
                      <button onClick={() => handleClick(item)}>Delete</button>
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

export default Category;
