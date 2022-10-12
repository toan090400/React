import MainMenu from "../../Layout/MainMenu";
import axios from "axios";
import { useState, useEffect } from "react";
const User = () => {
  const [getUsers, setUsers] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const getAllBooks = await axios.get(
          "http://localhost:5000/api/passports"
        );
        setUsers(getAllBooks.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, []);
  return (
    <div className="container">
      <MainMenu />
      <h1 className="mt-4">User page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">googleId</th>
            <th scope="col">displayName</th>
            <th scope="col">familyName</th>
            <th scope="col">givenName</th>
            <th scope="col">image</th>
          </tr>
        </thead>
        <tbody>
          {getUsers.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.googleId}</td>
                <td>{item.displayName}</td>
                <td>{item.familyName}</td>
                <td>{item.givenName}</td>
                <td>
                  <div className="text-center">
                    <img
                      src={item.image}
                      className="rounded"
                      alt={item.displayName}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
