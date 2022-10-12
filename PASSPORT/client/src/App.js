import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/auth-context";
//
import Home from "./components/Main/Home/Home.jsx";
import Login from "./components/Main/Login/Login.jsx";
import User from "./components/Main/User/User.jsx";
const App = () => {
  const context = useContext(AuthContext);
  const isLogin = context.isLoggedIn;
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      {isLogin ? (
        <Route path="/User" element={<User />} />
      ) : (
        <Route path="/Login" element={<Login />} />
      )}
    </Routes>
  );
};

export default App;
