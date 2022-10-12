import React, { useState, useEffect } from "react";
import axios from "axios";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  isUser: () => {},
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getUser, setIsUser] = useState({});

  const getUserData = async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const userG = await axios.get(url, { withCredentials: true });
      setIsUser(userG.data.user._json);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    getUserData();
    // setIsLoggedIn(true);
  }, []);

  const loginHandler = async () => {
    await window.open(`http://localhost:5000/auth/google/callback`, "_self");
    // setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    window.open(`http://localhost:5000/auth/logout`, "_self");
    setIsLoggedIn(false);
    setIsUser({});
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isUser: getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
