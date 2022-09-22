import "./bookAdd.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";
import AuthContext from "../../../../context/auth-context";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
const BookAdd = () => {
  const context = useContext(AuthContext);
  const user = context.isUser;
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
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const categorys = data.category;
      const image = data.image;
      const formData = await new FormData();
      formData.append("name", data.name);
      formData.append("user", data.user);
      categorys.forEach((item) => {
        formData.append("category[]", item);
      });
      formData.append("status", data.status);
      // lưu 1 ảnh (local/google drive)
      formData.append("image", image[0]);
      // lưu nhiều ảnh ảnh (local/google drive)
      // for (let i = 0; i < image.length; i++) {
      //   formData.append("image", image[i]);
      // }

      await axios.post("http://localhost:5000/api/books", formData);
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
            <h2>Book Add</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            <div className="form__control">
              <label htmlFor="name">Name</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
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
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="user">User Create:{user.username}</label>
              <input
                type="text"
                className="text"
                placeholder="User 1"
                id="user"
                value={user._id}
                readOnly
                {...register("user")}
              />
            </div>
            <div className="form__control">
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
            </div>
            <div className="form__control">
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
            </div>
            <div className="form__control">
              <label htmlFor="image">Image</label>
              {errors.image && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="file"
                placeholder="florinpop17"
                id="image"
                accept=".png, .jpg, .jpeg"
                multiple
                {...register("image", {
                  required: {
                    value: true,
                    message: "Tên người dùng không được trống",
                  },
                })}
              />
              {errors.image && <small>{errors.image.message}</small>}
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAdd;
