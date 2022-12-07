import { Link } from "react-router-dom";
import style from "../style/Error.module.css";
const Error = () => {
  return (
    <section className={style.page_404}>
      <div className={style.four_zero_four_bg}>
        <h1 className={style.h1}>404</h1>
      </div>
      <div className={style.content_box_404}>
        <h3 className={style.h3}>Có vẻ như</h3>
        <h4>Trang bạn tìm kiếm không có sẵn !!!</h4>
        <Link to="/" className={style.link}>
          Về trang chủ
        </Link>
      </div>
    </section>
  );
};

export default Error;
