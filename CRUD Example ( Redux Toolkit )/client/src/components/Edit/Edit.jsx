import React from "react";
import "./edit.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Edit = ({ update, edit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      update(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="from">
      <Link to={`/`}>Home</Link>
      <h1>Edit: {edit}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-controll">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("name", {
              required: {
                value: true,
                message: "Title không được trống",
              },
              minLength: {
                value: 3,
                message: "Title tối thiểu có 3 ký tự",
              },
              maxLength: {
                value: 10,
                message: "Title tối da 10 ký tự",
              },
            })}
            defaultValue={edit}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="button">
          <button>Edit</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
