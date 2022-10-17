import { Link } from "react-router-dom";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className="container">
      <Link to={`/`}>Home</Link>
      <Link to={`/Detail`}>Detail</Link>
      <h1 className={styles["home"]}>home</h1>
      <h1 className={styles.home}>home</h1>
      <h2 style={{ color: "blue" }}>home page</h2>
      <h1 className={`${styles.home} ${styles.start}`}>home start</h1>
    </div>
  );
};

export default Home;
