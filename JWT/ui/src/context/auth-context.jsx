import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  isUser: () => {},
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getUser, setIsUser] = useState({});

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation) {
      const user = JSON.parse(storedUserLoggedInInformation);
      setIsUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (item) => {
    // console.log(item.data);
    const data = item.data;
    const userLocalStorage = JSON.stringify(data);
    localStorage.setItem("isLoggedIn", userLocalStorage);
    setIsUser(data);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // console.log("run");

    localStorage.removeItem("isLoggedIn");
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
