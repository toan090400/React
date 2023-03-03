import React from "react";
import { useParams } from "react-router-dom";
import EditPage from "../components/Edit/Edit";
const Edit = () => {
  let { dataID } = useParams();
  const updateData = async (i) => {
    console.log(i);
  };
  return <EditPage update={updateData} edit={dataID} />;
};

export default Edit;
