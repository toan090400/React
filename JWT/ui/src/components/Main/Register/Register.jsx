import MainMenu from "../../Layout/MainMenu.jsx";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Register = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password");
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const register = await axios.post(
        "http://localhost:5000/api/auths/register",
        data
      );
      setMessage(register.data.message);
      reset();
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <MainMenu />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
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
          <div className="mb-3">
            <label htmlFor="password_config" className="form-label">
              Password Config
            </label>
            <input
              type="text"
              className="form-control"
              id="password_config"
              placeholder="password_config"
              {...register("password_config", {
                validate: (value) =>
                  value === password || "Password không khớp",
              })}
            />

            {errors.password_config && (
              <div style={{ color: "red" }}>
                {errors.password_config.message}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
