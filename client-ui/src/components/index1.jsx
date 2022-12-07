import style from "../style/Index1.module.css";
import { Link } from "react-router-dom";
const Index1 = () => {
  return (
    <div className={style.index_container}>
      <section className={style.features} id="features">
        <h1 className={style.heading}>
          our <span>features</span>
        </h1>

        <div className={style.box_container}>
          <div className={style.box}>
            <img src="images/feature-img-1.png" alt="" />
            <h3 className={style.title}>easy payments</h3>
            <p className={style.descrip}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <Link to="#" className={style.btn}>
              read more
            </Link>
          </div>
          <div className={style.box}>
            <img src="images/feature-img-1.png" alt="" />
            <h3 className={style.title}>easy payments</h3>
            <p className={style.descrip}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <Link to="#" className={style.btn}>
              read more
            </Link>
          </div>
          <div className={style.box}>
            <img src="images/feature-img-1.png" alt="" />
            <h3 className={style.title}>easy payments</h3>
            <p className={style.descrip}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <Link to="#" className={style.btn}>
              read more
            </Link>
          </div>
          <div className={style.box}>
            <img src="images/feature-img-1.png" alt="" />
            <h3 className={style.title}>easy payments</h3>
            <p className={style.descrip}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <Link to="#" className={style.btn}>
              read more
            </Link>
          </div>

          <div className={style.box}>
            <img src="images/feature-img-1.png" alt="" />
            <h3 className={style.title}>easy payments</h3>
            <p className={style.descrip}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <Link to="#" className={style.btn}>
              read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index1;
