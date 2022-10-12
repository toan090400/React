import MainMenu from "../../Layout/MainMenu";
import AuthContext from "../../../context/auth-context";

import { useContext } from "react";
const Login = () => {
  const context = useContext(AuthContext);
  const btnLogin = async () => {
    // await window.open(`http://localhost:5000/auth/google/callback`, "_self");
    context.onLogin();
  };
  return (
    <div className="container">
      <MainMenu />
      <h1 className="mt-4">Login page</h1>
      <button className="mt-4" onClick={btnLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
