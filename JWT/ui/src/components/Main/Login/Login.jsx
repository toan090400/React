import MainMenu from "../../Layout/MainMenu.jsx";
import AuthContext from "../../../context/auth-context";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const login = await axios.post(
        "http://localhost:5000/api/auths/login",
        data
      );
      setMessage(login.data.message);
      context.onLogin(login);
      reset();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container">
        <MainMenu />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "username không được trống",
                },
              })}
            />
            {errors.username && (
              <div style={{ color: "red" }}>{errors.username.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password không được trống",
                },
              })}
            />

            {errors.password && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
