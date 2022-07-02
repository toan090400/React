import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  // Login
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  // Logout
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <div>
      <header className="main-header">
        <h1>A Typical Page</h1>
        <nav className="nav">
          <ul>
            {/* {x && b}
                đây là biểu thức điều kiện true false
                chỉ nhận giá trị true hoặc false
                không nhận kiểu String('true,false'), Number(0,1,2)
                x là điều kiện, b là kết quả thực hiện
                ưu tiêu chạy true trước
            */}
            {isLoggedIn && (
              <li>
                <a href="/">User</a>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        {/* chua dang nhap */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {/* dang nhap */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App;
