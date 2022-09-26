import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// kiểm tra đăng nhập
import AuthContext from "./context/auth-context";
// truy cập không đăng nhập hoặc đăng nhập bằng tài khoản user
import Home from "./components/Main/Home/Home.jsx";
import Error from "./components/Main/Error/Error.jsx";
import Login from "./components/Main/Login/Login.jsx";
import Register from "./components/Main/Register/Register.jsx";
// truy cập cần đăng nhập tài khoản admin
import User from "./components/Admin/User/User.jsx";
const App = () => {
  const context = useContext(AuthContext);
  const isLogin = context.isLoggedIn;
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
