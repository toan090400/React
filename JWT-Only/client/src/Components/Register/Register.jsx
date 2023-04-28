import "./register.css";
const Register = () => {
  return (
    <section className="register__container">
      <div className="register__title"> Sign up </div>
      <form>
        <label>USERNAME</label>
        <input type="text" placeholder="Enter your username" />
        <label>PASSWORD</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit"> Create account </button>
      </form>
    </section>
  );
};

export default Register;
