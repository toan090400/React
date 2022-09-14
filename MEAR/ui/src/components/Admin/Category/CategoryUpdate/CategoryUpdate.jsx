import "./categoryUpdate.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";
import AuthContext from "../../../../context/auth-context";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const CategoryUpdate = () => {
  const context = useContext(AuthContext);
  const user = context.isUser;
  // lấy id data
  let { id } = useParams();
  // lấy tất cả thông tin của data
  const [getStatus, setStatus] = useState(true);
  const [getCategory, setCategory] = useState("");
  useEffect(() => {
    const getCategory = async () => {
      try {
        const getCategory = await axios.get(
          `http://localhost:5000/api/categorys/${id}`
        );
        setCategory(getCategory.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [id, getStatus]); // khi id thay đổi thì sẽ chạy lại
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // cập nhập
  const onSubmit = async (data) => {
    try {
      await axios.patch(`http://localhost:5000/api/categorys/${id}`, data);
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
            <h2>CategoryUpdate</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            <div className="form__control">
              <label htmlFor="name">Name</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              {getCategory.name && (
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
                  defaultValue={getCategory.name}
                />
              )}
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="user">User Create:{user.username}</label>
              <input
                type="text"
                className="text"
                placeholder="User 1"
                id="user"
                readOnly
                defaultValue={user._id}
              />
            </div>
            <div className="form__control">
              <label htmlFor="description">Description</label>
              {errors.description && (
                <i className="fas fa-exclamation-circle"></i>
              )}

              {getCategory.description && (
                <textarea
                  className="textarea"
                  id="description"
                  cols="30"
                  rows="10"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Tên người dùng không được trống",
                    },
                  })}
                  defaultValue={getCategory.description}
                ></textarea>
              )}

              {errors.description && (
                <small>{errors.description.message}</small>
              )}
            </div>

            <button className="submit">CategoryAdd</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryUpdate;
