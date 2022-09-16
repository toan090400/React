import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  let { id } = useParams();
  const [getBooks, setBook] = useState([]);
  const [getCategory, setCategory] = useState({});
  useEffect(() => {
    const getBook = async () => {
      try {
        const item = await axios.get(
          `http://localhost:5000/api/actions/category/${id}`
        );
        setBook(item.data.book);
        setCategory(item.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [id]);
  return (
    <>
      <MainMenu />
      <section className="features" id="features">
        <h1 className="heading">Category:{getCategory.name}</h1>

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
    </>
  );
};

export default Category;
