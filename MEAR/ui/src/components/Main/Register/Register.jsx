// import "./register.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password");
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      await axios.post("http://localhost:5000/api/users", data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainMenu />
      <div className="contentI bodyI">
        <div className="containerI bodyI">
          <div className="header">
            <h2>Register</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="form__Info"
          >
            <div className="form__control">
              <label htmlFor="name">Tên người dùng</label>
              {errors.name && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="florinpop17"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Tên người dùng không được trống",
                  },
                  minLength: {
                    value: 3,
                    message: "Tên người dùng tối thiểu có 3 ký tự",
                  },
                  maxLength: {
                    value: 10,
                    message: "Tên người dùng tối da 10 ký tự",
                  },
                })}
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="email">Email</label>
              {errors.email && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="florinpop17"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không được trống",
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && <small>{errors.email.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="phone">Phone</label>
              {errors.phone && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="florinpop17"
                id="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone không được trống",
                  },
                  pattern: {
                    value: /^[0-9\-\+]{9,15}$/g,
                    message: "Phone không hợp lệ",
                  },
                })}
              />
              {errors.phone && <small>{errors.phone.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="username">Tài Khoản</label>
              {errors.username && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="text"
                className="text"
                placeholder="florinpop17"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Tài Khoản không được trống",
                  },
                  minLength: {
                    value: 3,
                    message: "Tài Khoản tối thiểu có 3 ký tự",
                  },
                  maxLength: {
                    value: 10,
                    message: "Tài Khoản tối da 10 ký tự",
                  },
                })}
              />
              {errors.username && <small>{errors.username.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="password">Mật khẩu</label>
              {errors.password && <i className="fas fa-exclamation-circle"></i>}
              <input
                type="password"
                className="text"
                placeholder="florinpop17"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được trống",
                  },
                  minLength: {
                    value: 3,
                    message: "Mật khẩu tối thiểu có 3 ký tự",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mật khẩu tối da 10 ký tự",
                  },
                })}
              />
              {errors.password && <small>{errors.password.message}</small>}
            </div>
            <div className="form__control">
              <label htmlFor="password_confirm">Nhập lại mật khẩu</label>
              {errors.passwordConfirm && (
                <i className="fas fa-exclamation-circle"></i>
              )}
              <input
                type="password"
                className="text"
                placeholder="florinpop17"
                id="password_confirm"
                {...register("passwordConfirm", {
                  validate: (value) =>
                    value === password || "Password không khớp",
                })}
              />
              {errors.passwordConfirm && (
                <small>{errors.passwordConfirm.message}</small>
              )}
            </div>
            <button className="submit">Đăng ký</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
