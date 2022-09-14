import "./book.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";

import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Book = () => {
  const [getStatus, setStatus] = useState(true);
  const [getBooks, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const getAllBooks = await axios.get("http://localhost:5000/api/books");
        setBooks(getAllBooks.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, [getStatus]);
  // delete
  const handleClick = async (data) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${data._id}`);
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
                <th>Image</th>
                <th>Status</th>
                <th>Category</th>
                <th>Date</th>
                <th>User</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getBooks.map((item) => {
                return (
                  <tr key={item._id}>
                    <td data="Name">{item.name}</td>
                    <td data="Image">
                      <div className="image">
                        <img
                          // src={`/${item.image.id}`}
                          src={`https://lh3.googleusercontent.com/d/${item.image.id}`}
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td data="Status">{item.status}</td>
                    <td data="Category">
                      {item.category.map((item2) => {
                        return <p key={item2._id}>{item2.name}</p>;
                      })}
                    </td>
                    <td data="Date">
                      {moment(item.createdAt).format("DD-MM-YYYY")}
                    </td>
                    <td data="User">{item.user ? item.user.username : "No"}</td>
                    <td data="Update" className="link">
                      <Link to={`/BookUpdate/${item._id}`} className="a">
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

export default Book;
