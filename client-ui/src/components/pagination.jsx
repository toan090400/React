import { Link } from "react-router-dom";
import style from "../style/Pagination.module.css";
const Pagination = () => {
  return (
    <div className={style.container}>
      <ul className={style.pagination}>
        <li className={`${style.button} ${style.button_l}`}>
          <Link className={style.page_link} to="/">
            <i className="fa-solid fa-angles-left"></i>
          </Link>
        </li>
        <li className={style.button}>
          <Link className={style.page_link} to="/">
            1
          </Link>
        </li>
        <li className={`${style.button} ${style.page_link__current}`}>
          <Link className={style.page_link} to="/">
            2
          </Link>
        </li>
        <li className={style.button}>
          <Link className={style.page_link} to="/">
            ...
          </Link>
        </li>
        <li className={style.button}>
          <Link className={style.page_link} to="/">
            3
          </Link>
        </li>
        <li className={`${style.button} ${style.button_r}`}>
          <Link className={style.page_link} to="/">
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
