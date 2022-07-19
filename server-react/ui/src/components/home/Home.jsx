import './home.css';
import MainHeader from '../Layout/MainHeader';

import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {

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
    }, []);

    return (  
        <>
            <MainHeader/>
            <h1>home page</h1>
            {getPlaces.map(item =>(
                    <div key={item._id}>
                    <p>Name: {item.name}</p>
                    <p>Number: {item.number}</p>
                    {/* <img src={item.image} alt={item.name} /> */}
                    {/* <Link to={`/user/${item._id}`} >Detail</Link> */}
                </div>
            ))}
        </>
    );
}
 
export default Home;