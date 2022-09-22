import "./home.css";
import MainMenu from "../../Layout/MainMenu/MainMenu.jsx";

import axios from "axios";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [page_total, setPage_total] = useState(0);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const getAllBooks = await axios.get(
          `http://localhost:5000/api/actions/book?page=${pageNumber}`
        );
        setBooks(getAllBooks.data.book);
        setPage_total(getAllBooks.data.page_total);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, [pageNumber]);
  const handlePageCick = async (data) => {
    setPageNumber(data.selected + 1);
  };
  return (
    <>
      <MainMenu />
      <section className="features" id="features">
        <h1 className="heading">All Book</h1>
        <h1 className="heading">Page:{pageNumber}</h1>
        <div className="box-container">
          {books.map((item) => {
            return (
              <div key={item._id} className="box">
                <img
                  // src={`https://lh3.googleusercontent.com/d/${item.image.id}`}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, earum!
                </p>
                <Link to={`/Detail/${item._id}`} className="btn">
                  Detail
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="pagination__area">
        <ReactPaginate
          // tạo nút previous
          previousLabel={<i class="fa-solid fa-angles-left"></i>}
          // tạo nút next
          nextLabel={<i class="fa-solid fa-angles-right"></i>}
          // tạo khoản trắng loại bỏ ví dụ 1,2,3, ... ,9,10
          breakLabel={"..."}
          // tổng có bao nhiêu trang
          pageCount={page_total}
          /*
        2 '1,2,...,9,10'
        3 '1,2,3,...,8,9,10'
        4 '1,2,3,4,...7,8,9,10'
        */
          marginPagesDisplayed={3}
          /*
        2 '1,2,...,4,5,...,9,10'
        3 '1,2,3,4,5,6,...,8,9,10'
        */
          pageRangeDisplayed={2}
          onPageChange={handlePageCick}
          containerClassName={"pagination"} //ul
          pageClassName={"button"} //li
          pageLinkClassName={"page-link"} //a
          previousClassName={"button button-l"} // previous li
          previousLinkClassName={"page-link"} // previous a
          nextClassName={"button button-r"} // next li
          nextLinkClassName={"page-link"} // next a
          breakClassName={"button"} // break li
          breakLinkClassName={"page-link"} // break a
          activeClassName={"page-link--current"} // li trang hiện tại đăng chọn
        />
      </div>
    </>
  );
};

export default Home;
