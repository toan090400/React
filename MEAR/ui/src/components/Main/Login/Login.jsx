// import "./login.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";
import AuthContext from "../../../context/auth-context";

import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const login = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      context.onLogin(login);
      reset();
      navigate("/", { replace: true });
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
            <h2>Login</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            <div className="form__control">
              <label htmlFor="username">Tài Khoản</label>
              {errors.username && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="florinpop17"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Tài Khoản không được trống",
                  },
                })}
              />
              {errors.username && <small>{errors.username.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="password">Mật khẩu</label>
              {errors.password && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="password"
                className="text"
                placeholder="florinpop17"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được trống",
                  },
                })}
              />
              {errors.password && <small>{errors.password.message}</small>}
            </div>
            <button className="submit">Đăng nhập</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
