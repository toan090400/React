import './home.css';
import MainHeader from '../Layout/MainHeader';

import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
    const [getStatus, setStatus] = useState(true);
    const [getPlaces, setPlaces] = useState([]);
    useEffect(() => {
        const getAllPlaces = async () => {
            try {
                const getAllPlaces = await axios.get('http://localhost:5000/api/places');
                setPlaces(getAllPlaces.data);
            } catch (error) {
                console.log(error)
            }
        };
        getAllPlaces();
    }, [getStatus]);

    const handleClick = async (e) => {
        const id = await e._id;
        await axios.delete(`http://localhost:5000/api/places/${id}`);
        setStatus(!getStatus);
    }

    return (  
        <>
            <MainHeader/>
            <h1>home page</h1>
            {getPlaces.map(item =>(
                <div key={item._id}>
                    <p>Name: {item.name}</p>
                    <p>Number: {item.number}</p>
                    <img src={`/images/${item.image}`} alt={item.name} />
                    <button onClick={()=>handleClick(item)} >Detail</button>
                </div>
            ))}
        </>
    );
}
 
export default Home;