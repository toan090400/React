// import style from "../style/Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Link to="/">home page</Link>
      <br />
      <Link to="/indexPage1">IndexPage</Link>
      <br />
      <Link to="/nav_r1">nav_r1</Link>
      <br />
      <Link to="/nav_r2">nav_r2</Link>
      <br />
      <Link to="/form">form</Link>
      <br />
      <Link to="/form_user">form_user</Link>
      <br />
      <Link to="/login_1">login_1</Link>
      <br />
      <Link to="/login_2">login_2</Link>
      <br />
      <Link to="/pagination">pagination</Link>
      <br />
      <Link to="/table">table</Link>
      <br />
      <Link to="/slider">slider</Link>
      <br />
      <Link to="/message">message</Link>
      <br />
    </>
  );
};

export default Home;
