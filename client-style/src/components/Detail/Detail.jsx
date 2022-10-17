import { Link } from "react-router-dom";
import styles from "./detail.module.css";
const Detail = () => {
  return (
    <div className="container">
      <Link to={`/`}>Home</Link>
      <Link to={`/Detail`}>Detail</Link>
      <h1 className={styles.home}>home page</h1>
      <h2>detail</h2>
    </div>
  );
};

export default Detail;
