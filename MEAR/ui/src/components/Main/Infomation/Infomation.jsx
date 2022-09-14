import "./infomation.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const Infomation = () => {
  let { id } = useParams();
  const [getUser, setUser] = useState("");
  const [getStatus, setStatus] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const getUser = await axios.get(
          `http://localhost:5000/api/users/${id}`
        );
        setUser(getUser.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id, getStatus]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      await axios.patch(`http://localhost:5000/api/users/${id}`, data);
      setStatus(!getStatus);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainMenu />
      <div className="contentI bodyI">
        <div className="containerI bodyI">
          <div className="header">
            <h2>Infomation</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            <div className="form__control">
              <label htmlFor="name">Tên người dùng</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              {getUser.name && (
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
                    minLength: {
                      value: 3,
                      message: "Tên người dùng tối thiểu có 3 ký tự",
                    },
                    maxLength: {
                      value: 10,
                      message: "Tên người dùng tối da 10 ký tự",
                    },
                  })}
                  defaultValue={getUser.name}
                />
              )}

              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="email">Email</label>
              {errors.email && <i className="fas fa-exclamation-circle"></i>}
              {getUser.email && (
                <input
                  type="text"
                  className="text"
                  placeholder="florinpop17"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email không được trống",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g,
                      message: "Email không hợp lệ",
                    },
                  })}
                  defaultValue={getUser.email}
                />
              )}

              {errors.email && <small>{errors.email.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="phone">Phone</label>
              {errors.phone && <i className="fas fa-exclamation-circle"></i>}
              {getUser.phone && (
                <input
                  type="text"
                  className="text"
                  placeholder="florinpop17"
                  id="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone không được trống",
                    },
                    pattern: {
                      value: /^[0-9\-\+]{9,15}$/g,
                      message: "Phone không hợp lệ",
                    },
                  })}
                  defaultValue={getUser.phone}
                />
              )}

              {errors.phone && <small>{errors.phone.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="username">Tài Khoản</label>
              {getUser.username && (
                <input
                  type="text"
                  className="text"
                  placeholder="florinpop17"
                  id="username"
                  readOnly
                  defaultValue={getUser.username}
                />
              )}
            </div>
            <button className="submit">Đăng ký</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Infomation;
