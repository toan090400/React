import './MainHeader.css';
import AuthContext from '../../context/auth-context';

import { Link } from 'react-router-dom';
import {useContext} from 'react';

const MainHeader = () => {
    const context = useContext(AuthContext);
    // const handlerLogout = () => {
    //     context.onLogout();
    // }
    return (  
        <>
            <h1>Main Header</h1>
            
            <Link to="/" >All User</Link>

            <Link to="/home">|| My Place</Link>
            
            {context.isLoggedIn && (
                <Link to="/add/home">|| Add</Link>
            )}

            {context.isLoggedIn && (
                <button onClick={()=>context.onLogout()}>Logout</button>
            )}

            {!context.isLoggedIn && (
                <Link to="/auth">|| Login</Link>
            )}
            
        </>
    );
}
 
export default MainHeader;