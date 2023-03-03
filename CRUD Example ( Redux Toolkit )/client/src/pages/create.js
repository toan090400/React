import React from "react";
import CreatePage from "../components/Create/Create";
import { useDispatch } from "react-redux";
import { addRoom } from "../redux/postSlice";
const create = () => {
  const disPatch = useDispatch();
  const postData = async (i) => {
    // console.log(i);
    disPatch(addRoom(i));
  };
  return <CreatePage post={postData} />;
};

export default create;
