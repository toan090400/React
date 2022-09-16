import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// kiểm tra đăng nhập
import AuthContext from "./context/auth-context";
// truy cập không đăng nhập hoặc đăng nhập bằng tài khoản user
import Home from "./components/Main/Home/Home.jsx";
import CategoryDetail from "./components/Main/Category/Category.jsx";
import Error from "./components/Main/Error/Error.jsx";
import Detail from "./components/Main/Detail/Detail.jsx";
import Infomation from "./components/Main/Infomation/Infomation.jsx";
import Login from "./components/Main/Login/Login.jsx";
import Register from "./components/Main/Register/Register.jsx";
// truy cập cần đăng nhập tài khoản admin
import Book from "./components/Admin/Book/Book/Book.jsx";
import Category from "./components/Admin/Category/Category/Category.jsx";
import User from "./components/Admin/User/User.jsx";
import BookAdd from "./components/Admin/Book/BookAdd/BookAdd.jsx";
import CategoryAdd from "./components/Admin/Category/CategoryAdd/CategoryAdd.jsx";
import BookUpdate from "./components/Admin/Book/BookUpdate/BookUpdate.jsx";
import CategoryUpdate from "./components/Admin/Category/CategoryUpdate/CategoryUpdate.jsx";
const App = () => {
  const context = useContext(AuthContext);
  const isLogin = context.isLoggedIn;
  const user = context.isUser;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:bookId" element={<Detail />} />
      <Route path="/CategoryDetail/:id" element={<CategoryDetail />} />
      {!isLogin && (
        <>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </>
      )}

      {/* đăng nhập */}
      {isLogin && (
        <>
          <Route path="/Infomation/:id" element={<Infomation />} />
          {user.isAdmin && (
            <>
              <Route path="/Book" element={<Book />} />
              <Route path="/Category" element={<Category />} />
              <Route path="/User" element={<User />} />
              <Route path="/BookAdd" element={<BookAdd />} />
              <Route path="/CategoryAdd" element={<CategoryAdd />} />
              <Route path="/BookUpdate/:id" element={<BookUpdate />} />
              <Route path="/CategoryUpdate/:id" element={<CategoryUpdate />} />
            </>
          )}
        </>
      )}

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
