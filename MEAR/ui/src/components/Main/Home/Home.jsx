import "./home.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
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
  }, []);
  return (
    <>
      <MainMenu />
      <section className="features" id="features">
        <h1 className="heading">our features</h1>

        <div className="box-container">
          {getBooks.map((item) => {
            return (
              <div key={item._id} className="box">
                <img
                  src={`https://lh3.googleusercontent.com/d/${item.image.id}`}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, earum!
                </p>
                <Link to={`/Detail/${item._id}`} className="btn">
                  Detail
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="pagination">
        <button className="button button-l">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <Link to="#" className="page-link page-link--current">
          1
        </Link>
        <Link to="#" className="page-link">
          2
        </Link>
        <Link to="#" className="page-link">
          3
        </Link>
        <span className="dots">...</span>
        <Link to="#" className="page-link">
          23
        </Link>
        <button className="button button-r">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default Home;
