import { Link } from "react-router-dom";
import { useContext } from 'react';

import AuthContext from '../../../contexts/AuthContext'
const Header = () => {
    const context = useContext(AuthContext);
    const handleLogout = () => {
        context.onLogout();
    }
    return (  
        <>
            <Link to='/'>Home||</Link>

            <Link to='/detail'>Detail||</Link>

            <Link to='/register'>Register||</Link>

            <Link to='/login'>Login||</Link>

            {context.isLoggedIn && <Link to='/admin/category'>Admin||</Link>}

            {context.isLoggedIn && <button onClick={handleLogout}>logout</button>}

        </>
    );
}
 
export default Header;