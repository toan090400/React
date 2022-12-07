import { Link } from "react-router-dom";
import style from "../style/Login1.module.css";
const Login1 = () => {
  const handlerSignUp = () => {
    const container = document.querySelector(`.${style.container}`);
    container.classList.add(style.sign_up_mod);
  };
  const handlerSignIn = () => {
    const container = document.querySelector(`.${style.container}`);
    container.classList.remove(style.sign_up_mod);
  };
  return (
    <div className={style.container}>
      <div className={style.forms_container}>
        <div className={style.signin_signup}>
          <form action="#" className={style.sign_in_form}>
            <h2 className={style.title}>Đăng nhập</h2>
            <div className={style.input_field}>
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password Confirm"
              />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <input
              type="submit"
              value="Đăng nhập"
              className={`${style.btn} ${style.solid}`}
            />
            <p className={style.social_text}>Hoặc đăng nhập bằng:</p>
            <div className={style.social_media}>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className={style.social_icon}>
                <i className="fab fa-google"></i>
              </Link>
            </div>
          </form>
          <form action="#" className={style.sign_up_form}>
            <h2 className={style.title}>Đăng ký</h2>
            <div className={style.input_field}>
              <i className="fas fa-user"></i>
              <input type="text" name="name" placeholder="Displayname" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password_confirm"
                placeholder="Password Confirm"
              />
            </div>
            <p className={style.error_mesage}>Username không được để trống</p>
            <input type="submit" className={style.btn} value="Đăng ký" />
          </form>
        </div>
      </div>
      <div className={style.panels_container}>
        <div className={`${style.panel} ${style.left_panel}`}>
          <div className={style.content}>
            <h3>Bạn chưa có tài khoản ?</h3>

            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-up-btn"
              onClick={handlerSignUp}
            >
              Đăng ký ngay !
            </button>
          </div>
          <img src="images/login.svg" className={style.image} alt="" />
        </div>
        <div className={`${style.panel} ${style.right_panel}`}>
          <div className={style.content}>
            <h3>Bạn đã có tài khoản ?</h3>

            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-in-btn"
              onClick={handlerSignIn}
            >
              Đăng nhập ngay !
            </button>
          </div>
          <img src="images/register.svg" className={style.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login1;
