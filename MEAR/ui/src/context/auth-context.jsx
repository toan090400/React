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
    const user = item.data.user;
    const userLocalStorage = JSON.stringify(item.data.user);
    localStorage.setItem("isLoggedIn", userLocalStorage);
    setIsUser(user);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
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
