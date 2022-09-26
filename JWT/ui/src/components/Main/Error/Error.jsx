import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1>Trang bạn tìm kiếm không tồn tại</h1>
      <Link className="navbar-brand" to="/">
        Home
      </Link>
    </>
  );
};

export default Error;
