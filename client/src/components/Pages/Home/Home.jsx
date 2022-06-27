import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './home.css'

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

    const [getBooks, setBooks] = useState([]);
    const url = "http://localhost:5000/api/books";
    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const getAllBooks = await axios.get(url);
                setBooks(getAllBooks.data);
            } catch (error) {
                console.log(error)
            }
        };
        getAllBooks();
    }, []);

    return (  
        <>
            <Header />
            <div className="home__page">
                <h2>Home Page</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getBooks.map( item => {
                            return(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={`/detail/${item._id}`}>Detail</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}
 
export default Home;