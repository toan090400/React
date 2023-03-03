import React from "react";
import { useSelector } from "react-redux";
import HomePage from "../components/Home/Home";
const home = () => {
  const state = useSelector((item) => item.posts.rooms);
  return <HomePage dataList={state} />;
};

export default home;
