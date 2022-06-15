import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <>
            <Link to='/'>Home||</Link>

            <Link to='/admin/book'>Book||</Link>
            <Link to='/admin/bookAdd'>BookAdd||</Link>
            <Link to='/admin/bookUdate'>BookUpdate||</Link>

            <Link to='/admin/category'>Category||</Link>
            <Link to='/admin/categoryAdd'>CategoryAdd||</Link>
            <Link to='/admin/categoryUdate'>CategoryUpdate||</Link>
        </>
    );
}
 
export default Menu;