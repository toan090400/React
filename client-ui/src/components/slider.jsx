import style from "../style/Slider.module.css";
//
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  useEffect(() => {
    const des = async () => {
      var counter = 1;
      setInterval(function () {
        switch (counter) {
          case 1:
            document.getElementById(style.radio1).checked = true;
            counter++;
            break;
          case 2:
            document.getElementById(style.radio2).checked = true;
            counter = 1;
            break;
          default:
            break;
        }
      }, 5000);
    };
    des();
  }, []);
  return (
    <>
      <div className={style.slider}>
        <div className={style.slides}>
          <input type="radio" name="radio-btn" id={style.radio1} />
          <input type="radio" name="radio-btn" id={style.radio2} />

          <div className={`${style.slide} ${style.first}`}>
            <Link to="">
              <img src="images/slider1.jpg" alt="" />
            </Link>
          </div>
          <div className={style.slide}>
            <Link to="">
              <img src="images/slider2.jpg" alt="" />
            </Link>
          </div>
        </div>

        <div className={style.navigation_manual}>
          <label
            id="manual1"
            htmlFor={style.radio1}
            className={style.manual_btn}
          ></label>
          <label
            id="manual2"
            htmlFor={style.radio2}
            className={style.manual_btn}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Slider;
