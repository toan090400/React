import { Routes, Route, Navigate} from "react-router-dom";
import {useContext} from 'react';

import User from './components/user/User';
import Detail from './components/detail/detail';
import Home from './components/home/Home';
import AddHome from './components/AddHome/AddHome';
import Auth from './components/auth/auth'
import AuthContext from './context/auth-context';

const App = () => {
  // <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />}/>
  const context = useContext(AuthContext);
  // console.log(context);
  return (
    <Routes>

      <Route path="/" element={ <User /> } />

      <Route path="/user/:id" element={ <Detail /> } />

      <Route path="/home" element={ <Home /> } />

      {context.isLoggedIn && (
        <Route path="/add/home" element={ <AddHome /> } />
      )}

      {!context.isLoggedIn && (
        <Route path="/auth" element={ <Auth /> } />
      )}

      {/* nếu không có link phù hợp thì sẽ quay về trang / */}
      <Route path="*" element={ <Navigate to ="/" /> }/>

    </Routes>
  );
}

export default App;