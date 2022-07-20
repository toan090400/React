import { useState } from 'react';
import axios from "axios";

import './addHome.css';
import MainHeader from '../Layout/MainHeader';

const AddHome = () => {

    

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [image, setImage] = useState();

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const numberHandler = (e) => {
        setNumber(e.target.value);
    };
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        // console.log(e.target.files[0].name);
    };

    const handlerSubmit = async (e) => {
        try {
            e.preventDefault();
            const formData = await new FormData();
            formData.append('name', name);
            formData.append('number', number);
            formData.append('image', image);
            // console.log(formData)
            
            await axios.post('http://localhost:5000/api/places',formData);
            setName('');
            setNumber('');
            setImage('');
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <>
            <MainHeader />
            <h1>Add Home</h1>
            <form onSubmit={handlerSubmit} encType='multipart/form-data'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <input 
                        type="text" 
                        id="number" 
                        value={number}
                        onChange={numberHandler}
                    />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" 
                        accept=".png, .jpg, .jpeg"
                        onChange={imageHandler}
                    />
                </div>
                <button>Add</button>
            </form>
        </>
    );
}
 
export default AddHome;