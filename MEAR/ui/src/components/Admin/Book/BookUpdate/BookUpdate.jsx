import "./bookUpdate.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const BookUpdate = () => {
  let { id } = useParams();
  const [getStatus, setStatus] = useState(true);
  const [getBook, setBook] = useState("");
  // const [getCategorys, setCategorys] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const getBook = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );
        setBook(getBook.data);
        // const getAllCategorys = await axios.get(
        //   "http://localhost:5000/api/categorys"
        // );
        // setCategorys(getAllCategorys.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [id, getStatus]);
  // update
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const formData = await new FormData();
      formData.append("name", data.name);
      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }
      await axios.patch(`http://localhost:5000/api/books/${id}`, formData);
      setStatus(!getStatus);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AdminMenu />
      <div className="book__content body">
        <div className="containerI bodyI">
          <div className="header">
            <h2>BookUpdate</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            {/* <div className="form__control">
              <h2>Category</h2>
              {errors.category && <i className="fas fa-exclamation-circle"></i>}
              {getCategorys.map((item) => {
                return (
                  <div key={item._id} className="group">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={item.name}
                      value={item._id}
                      {...register("category", {
                        required: {
                          value: true,
                          message: "category không được trống",
                        },
                      })}
                    />
                    <label htmlFor={item.name}>{item.name}</label>
                  </div>
                );
              })}
              {errors.category && <small>{errors.category.message}</small>}
            </div> */}

            {/* <div className="form__control">
              <h2>Status</h2>
              {errors.status && <i className="fas fa-exclamation-circle"></i>}
              <div className="group">
                <input
                  type="radio"
                  name="exampleRadios"
                  className="checkbox"
                  id="hot"
                  value="hot"
                  {...register("status", {
                    required: {
                      value: true,
                      message: "status không được trống",
                    },
                  })}
                  defaultValue={getBook.status}
                />
                <label htmlFor="hot">hot</label>
              </div>
              <div className="group">
                <input
                  type="radio"
                  name="exampleRadios"
                  className="checkbox"
                  id="new"
                  value="new"
                  {...register("status", {
                    required: {
                      value: true,
                      message: "status không được trống",
                    },
                  })}
                />
                <label htmlFor="new">new</label>
              </div>

              {errors.status && <small>{errors.status.message}</small>}
            </div> */}
            <div className="form__control">
              <label htmlFor="name">Name</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              {getBook.name && (
                <input
                  type="text"
                  className="text"
                  placeholder="florinpop17"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Tên người dùng không được trống",
                    },
                  })}
                  defaultValue={getBook.name}
                />
              )}

              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                placeholder="florinpop17"
                id="image"
                multiple
                {...register("image")}
              />
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookUpdate;
