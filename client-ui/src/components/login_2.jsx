import { Link } from "react-router-dom";
import style from "../style/Login2.module.css";
const Login2 = () => {
  return (
    <div className={style.form_container}>
      <form action="" method="post" className={style.form_login2}>
        <h3>register now</h3>
        <p className={style.error_msg}>name is exit</p>
        <input type="text" name="name" required placeholder="enter your name" />
        <p className={style.error}>err message</p>
        <input
          type="email"
          name="email"
          required
          placeholder="enter your email"
        />
        <p className={style.error}>err message</p>
        <input
          type="password"
          name="password"
          required
          placeholder="enter your password"
        />
        <p className={style.error}>err message</p>
        <input
          type="password"
          name="cpassword"
          required
          placeholder="confirm your password"
        />
        <p className={style.error}>err message</p>
        <select name="user_type">
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <p className={style.error}>err message</p>
        <button className={style.form_btn}>Success</button>
        <p className={style.text}>
          already have an account?{" "}
          <Link to="/" className={style.link}>
            login now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login2;
