import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./home.scss";
import { deleteRoom } from "../../redux/postSlice";
const Home = ({ dataList }) => {
  const disPatch = useDispatch();
  const handleDelete = (i) => {
    disPatch(deleteRoom(i));
  };
  return (
    <div className="container">
      <h1 className="h1">home page</h1>
      <div className="link">
        <Link className="link-create" to="/create">
          Create
        </Link>
      </div>
      <div className="data">
        {dataList.map((data, index) => {
          return (
            <div className="list" key={index}>
              <div className="title">{data.name}</div>
              <div className="edit">
                <Link to={`/rooms/${data.name}`}>Edit</Link>
              </div>
              <div className="delete">
                <button onClick={() => handleDelete(data)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
