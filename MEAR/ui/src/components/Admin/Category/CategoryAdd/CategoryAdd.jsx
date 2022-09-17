import "./categoryAdd.css";
import AdminMenu from "../../../Layout/AdminMenu/AdminMenu.jsx";
import AuthContext from "../../../../context/auth-context";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext } from "react";
const CategoryAdd = () => {
  const context = useContext(AuthContext);
  const user = context.isUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      await axios.post("http://localhost:5000/api/categorys", data);
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
            <h2>Category Add</h2>
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
              <label htmlFor="description">Description</label>
              {errors.description && (
                <i className="fas fa-exclamation-circle"></i>
              )}
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
              ></textarea>

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

export default CategoryAdd;
