import { Link } from "react-router-dom";
import style from "../style/Table.module.css";
const Table = () => {
  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>Chair</th>
            <th>The Laid Back</th>
            <th>The Worker Bee</th>
            <th>The Chair 4/2</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data="Chair">Width</td>
            <td data="The Laid Back">80 cm</td>
            <td data="The Worker Bee">60 cm</td>
            <td data="The Chair 4/2">220 cm</td>
            <td data="Image">
              <img
                className={style.image}
                src="images/dai-vuong-tha-mang.jpg"
                alt=""
              />
            </td>
            <td data="Update">
              <div className={style.icon}>
                <Link to="/" className={style.link}>
                  <i className="fa-solid fa-wrench"></i>
                </Link>
              </div>
            </td>
            <td data="Delete">
              <div className={style.icon}>
                <button className={style.btn}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
