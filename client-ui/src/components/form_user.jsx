import { Link } from "react-router-dom";
import style from "../style/FormUser.module.css";
const FormUsre = () => {
  return (
    <div className={style.update_profile}>
      <form
        action=""
        method="post"
        enctype="multipart/form-data"
        className={style.form}
      >
        <img
          className={style.image}
          src="images/dai-vuong-tha-mang.jpg"
          alt=""
        />
        <div className={style.error_message}>Error username</div>
        <div className={style.success_message}>Succcess username</div>
        <div className={style.flex}>
          <div className={style.inputBox}>
            <p className={style.text}>
              username: <span className={style.err_message}>error name</span>
            </p>
            <input type="text" name="update_name" className={style.box} />
            <p className={style.text}>
              your email: <span className={style.err_message}>error name</span>
            </p>
            <input type="email" name="update_email" className={style.box} />
            <p className={style.text}>
              update your pic:{" "}
              <span className={style.err_message}>error name</span>
            </p>
            <input
              type="file"
              name="update_image"
              accept="image/jpg, image/jpeg, image/png"
              className={style.box}
            />
          </div>
          <div className={style.inputBox}>
            <input type="hidden" name="old_pass" />
            <p className={style.text}>
              old password:{" "}
              <span className={style.err_message}>
                name khong duoc de trong
              </span>
            </p>
            <input
              type="password"
              name="update_pass"
              placeholder="enter previous password"
              className={style.box}
            />
            <p className={style.text}>
              new password:{" "}
              <span className={style.err_message}>error name</span>
            </p>
            <input
              type="password"
              name="new_pass"
              placeholder="enter new password"
              className={style.box}
            />
            <p className={style.text}>
              confirm password:{" "}
              <span className={style.err_message}>error name</span>
            </p>
            <input
              type="password"
              name="confirm_pass"
              placeholder="confirm new password"
              className={style.box}
            />
          </div>
        </div>
        <button className={style.btn}>update</button>
        <Link to="/" className={`${style.delete_btn} ${style.link}`}>
          go back
        </Link>
      </form>
    </div>
  );
};

export default FormUsre;
