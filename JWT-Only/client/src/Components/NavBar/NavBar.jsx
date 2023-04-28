import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { logoutData, refesTokenData } from "../../Redux/authSlice";
import "./navbar.css";
const NavBar = () => {
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handlerLogout = async () => {
    try {
      axios.post("http://localhost:5000/api/auth/logout");
      dispatch(logoutData());
    } catch (error) {
      console.log(error);
    }
  };

  const authRefesTokenData = useSelector((state) => state.auth.refreshToken);
  const handlerRefesToken = async () => {
    try {
      const refesToken = await axios.post(
        "http://localhost:5000/api/auth/refresh",
        { headers: { refreshToken: `RefreshToken ${authRefesTokenData}` } }
      );
      dispatch(refesTokenData(refesToken));
      toast.success(refesToken.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <nav className="navbar__container">
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
      <Link to="/" className="navbar__home">
        {" "}
        Home{" "}
      </Link>
      {auth.username ? (
        <>
          <p
            onClick={handlerRefesToken}
            style={{ cursor: "pointer" }}
            className="navbar__user"
          >
            {" "}
            refesToken
          </p>
          <p className="navbar__user">
            Hi, <span> {auth.username} </span>{" "}
          </p>
          <p
            onClick={handlerLogout}
            style={{ cursor: "pointer" }}
            className="navbar__user"
          >
            {" "}
            Log out
          </p>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar__login">
            {" "}
            Login{" "}
          </Link>
          <Link to="/register" className="navbar__register">
            {" "}
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
