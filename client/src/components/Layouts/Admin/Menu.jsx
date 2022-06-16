import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <>
            <Link to='/'>Home||</Link>

            <Link to='/admin/book'>Book||</Link>
            <Link to='/admin/bookAdd'>BookAdd||</Link>

            <Link to='/admin/category'>Category||</Link>
            <Link to='/admin/categoryAdd'>CategoryAdd||</Link>
        </>
    );
}
 
export default Menu;