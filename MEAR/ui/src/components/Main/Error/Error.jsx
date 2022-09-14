import "./error.css";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                {/* <div className="four_zero_four_bg">
                  <h1 className="text-center">404</h1>
                </div> */}
                <div className="content_box_404">
                  <h3 className="h2">Có vẻ như</h3>
                  <h4>Trang bạn tìm kiếm không có sẵn !!!</h4>
                  <Link to={`/`} className="a">
                    Về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
