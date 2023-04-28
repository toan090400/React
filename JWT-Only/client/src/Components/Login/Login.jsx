import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginData } from "../../Redux/authSlice";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const dataLogin = {
      username,
      password,
    };
    try {
      const login = await axios.post(
        "http://localhost:5000/api/auth/login",
        dataLogin
      );
      dispatch(loginData(login));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <section className="login__container">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="login__title"> Log in</div>
      <form onSubmit={handlerSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Continue </button>
      </form>
      <div className="login__register"> Don't have an account yet? </div>
      <Link className="login__register-link" to="/register">
        Register one for free{" "}
      </Link>
    </section>
  );
};

export default Login;
