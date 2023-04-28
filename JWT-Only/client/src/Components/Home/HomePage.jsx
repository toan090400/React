import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
const HomePage = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const allUser = async () => {
      const users = await axios.get("http://localhost:5000/api/users");
      setUserData(users.data.users);
    };
    allUser();
  }, []);

  const user = useSelector((state) => state.auth.user);
  const authAccessToken = useSelector((state) => state.auth.accessToken);
  const handlerClickDelete = async (value) => {
    try {
      const deleteUser = await axios.delete(
        `http://localhost:5000/api/users/${value}`,
        { headers: { token: `AccessToken ${authAccessToken}` } }
      );
      const message = await deleteUser.data.message;
      toast.success(message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <main className="home__container">
        <div className="home__title">
          Level: {user.isAdmin ? "Admin" : "Customer"}
        </div>
        <div className="home__userlist">
          {userData.map((user, index) => {
            return (
              <div key={index} className="user__container">
                <div className="home__user">{user.username}</div>
                <div
                  onClick={() => handlerClickDelete(user._id)}
                  className="delete__user"
                >
                  {" "}
                  Delete{" "}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
