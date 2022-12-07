import { Link } from "react-router-dom";
import style from "../style/Nav2.module.css";
const Nav = ({ searchData, cartData, loginData, menuData }) => {
  const data = {
    search: style.search_form,
    cart: style.shopping_cart,
    login: style.login_form,
    menu: style.navbar,
  };
  const handlerSearch = () => {
    searchData(data);
  };
  const handlerCart = () => {
    cartData(data);
  };
  const handlerLogin = () => {
    loginData(data);
  };
  const handlerMenu = () => {
    menuData(data);
  };

  return (
    <div className={style.index_container}>
      <header className={style.header}>
        <Link to="/" className={`${style.link} ${style.logo}`}>
          <i className="fas fa-shopping-basket"></i> groco
        </Link>

        <nav className={style.navbar}>
          <Link className={style.link} to="/">
            home
          </Link>
          <Link className={style.link} to="#">
            features
          </Link>
          <Link className={style.link} to="#">
            products
          </Link>
          <Link className={style.link} to="#">
            categories
          </Link>
          <Link className={style.link} to="#">
            review
          </Link>
          <Link className={style.link} to="#">
            blogs
          </Link>
        </nav>

        <div className={style.icons}>
          <div
            onClick={handlerMenu}
            className="fas fa-bars"
            id={style.menu_btn}
          ></div>
          <div
            onClick={handlerSearch}
            className="fas fa-search"
            id="search-btn"
          ></div>
          <div
            onClick={handlerCart}
            className="fas fa-shopping-cart"
            id="cart-btn"
          ></div>
          <div
            onClick={handlerLogin}
            className="fas fa-user"
            id="login-btn"
          ></div>
        </div>

        <div className={style.search_form}>
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
            required
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        <div className={style.shopping_cart}>
          <div className={style.box}>
            <i className="fas fa-trash"></i>
            <img src="images/cart-img-1.png" alt="" />
            <div className={style.content}>
              <h3>watermelon</h3>
              <span className={style.price}>$4.99</span>
              <span className={style.quantity}>qty : 1</span>
            </div>
          </div>
          <div className={style.box}>
            <i className="fas fa-trash"></i>
            <img src="images/cart-img-2.png" alt="" />
            <div className={style.content}>
              <h3>watermelon</h3>
              <span className={style.price}>$4.99</span>
              <span className={style.quantity}>qty : 1</span>
            </div>
          </div>
          <div className={style.box}>
            <i className="fas fa-trash"></i>
            <img src="images/cart-img-3.png" alt="" />
            <div className={style.content}>
              <h3>watermelon</h3>
              <span className={style.price}>$4.99</span>
              <span className={style.quantity}>qty : 1</span>
            </div>
          </div>
          <div className={style.total}>total : $19.69</div>
          <div className={style.checkout}>
            <button className={style.btn}>checkout</button>
          </div>
        </div>

        <form action="" className={style.login_form}>
          <h3>Login Now</h3>
          <input type="email" placeholder="your email" className={style.box} />
          <p className={style.err_message}>err message</p>
          <input
            type="password"
            placeholder="your password"
            className={style.box}
          />
          <p className={style.err_message}>err message</p>
          <p className={style.text}>
            Forget your password <Link to="#">Click here</Link>
          </p>
          <p className={style.text}>
            Don't have an account <Link to="#">Create now</Link>
          </p>
          <button type="submit" className={style.btn}>
            Login
          </button>
        </form>
      </header>
    </div>
  );
};

export default Nav;
