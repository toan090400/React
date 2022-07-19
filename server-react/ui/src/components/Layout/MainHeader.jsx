import './MainHeader.css';
import AuthContext from '../../context/auth-context';

import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from "axios";

const MainHeader = () => {

    const context = useContext(AuthContext);
    
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});

    // const handlerLogout = () => {
    //     context.onLogout();
    // }
    
    

    useEffect(() => {
        const getUser = async () => {
            try {
                const userId =  localStorage.getItem('isLoggedIn');
                if (userId) {
                    const getUser = await axios.get(`http://localhost:5000/api/users/${userId}`);
                    const user = await getUser.data;
                    setUser(user);
                    setLogin(true);
                }
                
            } catch (error) {
                console.log(error)
            }
        };
        getUser();
    }, []);

    return (  
        <>
            <h1>Main Header</h1>
            
            <Link to="/" >All User</Link>

            <Link to="/home">|| My Place</Link>
            
            {context.isLoggedIn && (
                <Link to="/add/home">|| Add</Link>
            )}

            {login && (
                <Link to={`/user/${user._id}`}>|| User: {user.username}</Link>
            )}

            {context.isLoggedIn && (
                <button onClick={()=>context.onLogout()}>Logout</button>
            )}

            {!context.isLoggedIn && (
                <Link to="/auth">|| Login</Link>
            )}

            {!context.isLoggedIn && (
                <Link to="/register">|| Register</Link>
            )}
            
        </>
    );
}
 
export default MainHeader;