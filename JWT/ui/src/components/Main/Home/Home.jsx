import MainMenu from "../../Layout/MainMenu.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const getAllBooks = await axios.get(`http://localhost:5000/api/books`);
        setBooks(getAllBooks.data.books);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, []);
  return (
    <>
      <div className="container">
        <MainMenu />
        <h1>Book</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">description</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
