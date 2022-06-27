import Menu from '../../../Layouts/Admin/Menu.jsx'
import './category.css'

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment'

const Category = () => {

    const [getStatus, setStatus] = useState(true);
    const [getMessage, setMessage] = useState('');
    const [getCategorys, setCategorys] = useState([]);
    const url = "http://localhost:5000/api/categorys";
    useEffect(() => {
        const getAllCategorys = async () => {
            try {
                const getAllCategorys = await axios.get(url);
                setCategorys(getAllCategorys.data);
            } catch (error) {
                console.log(error)
            }
        };
        getAllCategorys();
    }, [getStatus]);

    

    const handleClick = async (data) => {
        try {
            const deleteData = await axios.delete(`http://localhost:5000/api/categorys/${data._id}`);
            setMessage(deleteData.data.status);
            setStatus(!getStatus)
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <>
            <Menu />
            <div className="category__page">
                <h2>Category Page</h2>
                <h2>Thông báo: {getMessage}</h2>
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
                        {getCategorys.map( item => {
                            return(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{moment(item.createdAt).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <Link to={`/admin/categoryUpdate/${item._id}`}>Update</Link>
                                    </td>
                                    <td onClick={()=>handleClick(item)}>
                                        Delete
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default Category;