import "./adminMenu.css";

import { Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="menu">
        <input type="checkbox" id="btn" hidden />
        <label htmlFor="btn" className="menu__btn">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar">
          <div className="title">Side Menu</div>
          <ul className="menu__admin">
            <li>
              <Link to="/">
                <i className="fa-solid fa-house-chimney"></i>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Book">
                <i className="fa-solid fa-house-chimney"></i>
                Book
              </Link>
            </li>
            <li>
              <Link to="/Category">
                <i className="fa-solid fa-house-chimney"></i>
                Category
              </Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>

            <li>
              <Link to="/BookAdd">Book Add</Link>
            </li>
            <li>
              <Link to="/CategoryAdd">Category Add</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <script src="/js/menu.js"></script> */}
    </>
  );
};

export default AdminMenu;
