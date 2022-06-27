import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './detail.css'

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Detail = () => {

    let { id } = useParams();

    const [getBook, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const getDataBook = await axios.get(`http://localhost:5000/api/books/${id}`);
                setBook(getDataBook.data);
            } catch (error) {
                console.log(error)
            }
        };
        getBook();
    }, [id]);

    return (  
        <>
            <Header />
            <div className="detail__page">
                <h2>Detail Page</h2>
                <div className="div">
                    <p>name:</p>
                    <h3>{getBook.name}</h3>
                </div>
                <div className="div">
                    <p>difficulty:</p>
                    <h3>{getBook.difficulty}</h3>
                </div>
                <div className="div">
                    <p>description:</p>
                    <h3>{getBook.description}</h3>
                </div>
                {/* <div className="div">
                    <p>image:</p>
                    
                    <img src="/assets/image-one/com_ga1.png" alt="com_ga1.png" />
                </div> */}
                <div className="div">
                    <p>user:</p>
                    <h3>{getBook.user?.username ?? '0 biet'}</h3>
                    {/* <h3>{getBook.user.username}</h3> */}
                </div>
                <div className="div">
                    <p>category:</p>
                    {getBook.category?.map( item => {
                        return(
                            <div key={item._id}>
                                <h3>{item.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Detail;