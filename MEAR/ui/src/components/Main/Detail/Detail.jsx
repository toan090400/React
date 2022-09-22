// import "./detail.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  const { bookId } = useParams();
  const [getBook, setBook] = useState({});
  const [getImage, setImage] = useState("");
  useEffect(() => {
    const getBook = async () => {
      try {
        const getBook = await axios.get(
          `http://localhost:5000/api/actions/book/${bookId}`
        );
        setBook(getBook.data.book);
        setImage(getBook.data.book.image.id);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [bookId]);
  return (
    <>
      <MainMenu />
      <section className="features" id="features">
        <h1 className="heading">Detail</h1>
        <div className="box-container">
          <div className="box">
            <img
              src={`https://lh3.googleusercontent.com/d/${getImage}`}
              alt={getBook.name}
            />
            <h3>{getBook.name}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
