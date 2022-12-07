import NavPage from "../components/nav_r2";
import style from "../style/Nav2.module.css";
const Nav = () => {
  const search = ({ search, cart, login, menu }) => {
    // close
    const shopingCart = document.querySelector(`.${cart}`);
    shopingCart.classList.remove(style.active);
    const Login = document.querySelector(`.${login}`);
    Login.classList.remove(style.active);
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.remove(style.active);
    // open
    const searchForm = document.querySelector(`.${search}`);
    searchForm.classList.toggle(style.active);
  };
  const cart = ({ search, cart, login, menu }) => {
    // close
    const Search = document.querySelector(`.${search}`);
    Search.classList.remove(style.active);
    const Login = document.querySelector(`.${login}`);
    Login.classList.remove(style.active);
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.remove(style.active);
    // open
    const shopingCart = document.querySelector(`.${cart}`);
    shopingCart.classList.toggle(style.active);
  };
  const login = ({ search, cart, login, menu }) => {
    // close
    const shopingCart = document.querySelector(`.${cart}`);
    shopingCart.classList.remove(style.active);
    const Search = document.querySelector(`.${search}`);
    Search.classList.remove(style.active);
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.remove(style.active);
    // open
    const Login = document.querySelector(`.${login}`);
    Login.classList.toggle(style.active);
  };
  const menu = ({ search, cart, login, menu }) => {
    // close
    const shopingCart = document.querySelector(`.${cart}`);
    shopingCart.classList.remove(style.active);
    const Login = document.querySelector(`.${login}`);
    Login.classList.remove(style.active);
    const Search = document.querySelector(`.${search}`);
    Search.classList.remove(style.active);
    // open
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.toggle(style.active);
  };
  return (
    <>
      <NavPage
        searchData={search}
        cartData={cart}
        loginData={login}
        menuData={menu}
      />
    </>
  );
};

export default Nav;
