import "./mainMenu.css";
import AuthContext from "../../../context/auth-context";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
  const context = useContext(AuthContext);
  const isLogin = context.isLoggedIn;
  const user = context.isUser;
  // đăng xuất
  const handlerLogout = () => {
    context.onLogout();
  };
  // hiển thị thể loại
  const [getCategorys, setCategorys] = useState([]);
  useEffect(() => {
    const getAllCategorys = async () => {
      try {
        const getAllCategorys = await axios.get(
          "http://localhost:5000/api/categorys"
        );
        setCategorys(getAllCategorys.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategorys();
  }, []);
  return (
    <>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <Link to="/">CodingNepal</Link>
            </div>
            <ul className="links">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house-chimney"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="desktop-link">
                  <i className="fa-solid fa-book-open"></i>
                  Category
                </Link>
                <input type="checkbox" id="show-features" />
                <label htmlFor="show-features">
                  <i className="fa-solid fa-book-open"></i>
                  Category
                </label>
                <ul>
                  {getCategorys.map((item) => {
                    return (
                      <li key={item._id}>
                        <Link to={`/CategoryDetail/${item._id}`}>
                          <i className="fa-solid fa-book-open"></i>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              {!isLogin && (
                <>
                  <li>
                    <Link to="/Login">
                      <i className="fa-solid fa-address-card"></i>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/Register">
                      <i className="fa-solid fa-address-card"></i>
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isLogin && (
                <li>
                  <Link to="#" className="desktop-link">
                    <i className="fa-solid fa-user"></i>
                    User:{user.username}
                  </Link>
                  <input type="checkbox" id="show-user" />
                  <label htmlFor="show-user">
                    <i className="fa-solid fa-user"></i>
                    User:{user.username}
                  </label>
                  <ul>
                    {user.isAdmin && (
                      <li>
                        <Link to="/Book">
                          <i className="fa-solid fa-user-gear"></i>
                          Admin
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link to={`/Infomation/${user._id}`}>
                        <i className="fa-solid fa-circle-info"></i>
                        Information
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={handlerLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              required
            />
            <button type="submit" className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </>
  );
};

export default MainMenu;
