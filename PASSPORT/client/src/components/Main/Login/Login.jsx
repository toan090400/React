import MainMenu from "../../Layout/MainMenu";
import AuthContext from "../../../context/auth-context";

import { useContext } from "react";
const Login = () => {
  const context = useContext(AuthContext);
  const Login_Google = async () => {
    context.onLogin("google");
  };
  const Login_Github = async () => {
    context.onLogin("github");
  };
  return (
    <div className="container">
      <MainMenu />
      <h1 className="mt-4">Login page</h1>
      <div className="">
        <button className="mt-4" onClick={Login_Google}>
          Login Google
        </button>
      </div>
      <div className="">
        <button className="mt-4" onClick={Login_Github}>
          Login Github
        </button>
      </div>
    </div>
  );
};

export default Login;
