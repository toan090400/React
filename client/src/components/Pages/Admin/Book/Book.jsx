import Menu from '../../../Layouts/Admin/Menu.jsx'
import './book.css'

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment'

const Book = () => {

    const [getStatus, setStatus] = useState(true);
    const [getMessage, setMessage] = useState('');
    const [getBooks, setBooks] = useState([]);
    const url = "http://localhost:5000/api/books";
    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const getAllBooks = await axios.get(url);
                setBooks(getAllBooks.data);
                console.log(getAllBooks.data)
            } catch (error) {
                console.log(error)
            }
        };
        getAllBooks();
    }, [getStatus]);

    

    const handleClick = async (data) => {
        try {
            const deleteData = await axios.delete(`http://localhost:5000/api/books/${data._id}`);
            setMessage(deleteData.data.status);
            setStatus(!getStatus)
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <>
            <Menu />
            <div className="book__page">
                <h2>Book Page</h2>
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
                        {getBooks.map( item => {
                            return(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{moment(item.createdAt).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <Link to={`/admin/bookUpdate/${item._id}`}>Update</Link>
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
 
export default Book;