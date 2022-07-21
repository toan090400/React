import './detail.css'
import MainHeader from '../Layout/MainHeader'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const Detail = () => {

    const item = useParams().id;

    const [data, setData] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                const getUser = await axios.get(`http://localhost:5000/api/users/${item}`);
                const user = await getUser.data;
                setData(user);
            } catch (error) {
                console.log(error)
            }
        };
        getUser();
    }, [item]);
    return (  
        <>
            <MainHeader />
            <h1>Detail</h1>
            <div>
                <p>{data.username}</p>
            </div>
        </>
    );
}
 
export default Detail;