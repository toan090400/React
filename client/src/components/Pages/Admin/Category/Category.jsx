import Menu from '../../../Layouts/Admin/Menu.jsx'
import './category.css'

import { Link } from "react-router-dom";

const Category = () => {
    return (  
        <>
            <Menu />
            <div className="category__page">
                <h2>Category Page</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CreateDay</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>12/2/2022</td>
                            <td>
                                <Link to='/admin/categoryUdate/:id'>Update</Link>
                            </td>
                            <td>
                                Delete
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>12/2/2022</td>
                            <td>
                                <Link to='/admin/categoryUdate/:id'>Update</Link>
                            </td>
                            <td>
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default Category;