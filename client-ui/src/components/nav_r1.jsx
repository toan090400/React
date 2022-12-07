import { Link } from "react-router-dom";
import style from "../style/Nav1.module.css";
const Nav = () => {
  return (
    <div className={style.wrapper}>
      <nav>
        <input type="checkbox" id={style.show_search} />
        <input type="checkbox" id={style.show_menu} />
        <label htmlFor={style.show_menu} className={style.menu_icon}>
          <i className="fas fa-bars"></i>
        </label>
        <div className={style.content}>
          <div className={style.logo}>
            <Link to="#" className={style.link}>
              CodingNepal
            </Link>
          </div>
          <ul className={style.links}>
            <li>
              <Link to="/" className={style.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className={style.link}>
                About
              </Link>
            </li>
            <li>
              <Link to="#" className={style.desktop_link}>
                Features
              </Link>
              <input type="checkbox" id={style.show_features} />
              <label htmlFor={style.show_features}>Features</label>
              <ul>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 1
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 2
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 3
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 4
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className={style.desktop_link}>
                Services
              </Link>
              <input type="checkbox" id={style.show_services} />
              <label htmlFor={style.show_services}>Services</label>
              <ul>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 1
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 2
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.link}>
                    Drop Menu 3
                  </Link>
                </li>
                <li>
                  <Link to="#" className={style.desktop_link}>
                    More Items
                  </Link>
                  <input type="checkbox" id={style.show_items} />
                  <label htmlFor={style.show_items}>More Items</label>
                  <ul>
                    <li>
                      <Link to="#" className={style.link}>
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={style.link}>
                        2
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={style.link}>
                        3
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className={style.link}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <label htmlFor={style.show_search} className={style.search_icon}>
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className={style.search_box}>
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" className={style.go_icon}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
