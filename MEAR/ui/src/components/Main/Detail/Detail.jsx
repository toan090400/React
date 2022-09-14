// import "./detail.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  let { id } = useParams();
  const [getBook, setBook] = useState("");
  useEffect(() => {
    const getBook = async () => {
      try {
        const getBook = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );
        setBook(getBook.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [id]);
  return (
    <>
      <MainMenu />
      <section class="features" id="features">
        <h1 class="heading">Detail</h1>

        <div class="box-container">
          <div class="box">
            <img
              // src={`${getBook.imageLink}/${getBook.image.id}`}
              src={`https://lh3.googleusercontent.com/d/${getBook.image.id}`}
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
