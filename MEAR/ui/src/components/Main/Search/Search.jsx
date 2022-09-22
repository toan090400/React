import "./search.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [getBooks, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      setSearch(data.search);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/actions/search?search=${search}`
        );
        setBooks(result.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, [search]);
  return (
    <>
      <MainMenu />
      <section className="features" id="features">
        <h1 className="heading">Search</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="search"
            placeholder="florinpop17"
            id="username"
            {...register("search", {
              required: {
                value: true,
                message: "Không được trống",
              },
            })}
          />
        </form>
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

export default Search;
