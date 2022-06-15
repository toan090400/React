import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <>
            <Link to='/'>Home||</Link>
            <Link to='/detail'>Detail||</Link>
            <Link to='/register'>Register||</Link>

            <Link to='/admin/category'>Admin||</Link>
        </>
    );
}
 
export default Header;