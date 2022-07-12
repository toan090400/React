import { useState } from 'react';

import './addHome.css';
import MainHeader from '../Layout/MainHeader';

const AddHome = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const numberHandler = (e) => {
        setNumber(e.target.value);
    };
    const imageHandler = (e) => {
        setImage(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(number);
        // console.log(image);

        setName('');
        setNumber('');
        setImage('');
    }

    return (  
        <>
            <MainHeader />
            <h1>Add Home</h1>
            <form onSubmit={handlerSubmit}>
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
                    <textarea 
                        type="text" 
                        id="image" 
                        cols="30" 
                        rows="10"
                        value={image}
                        onChange={imageHandler}
                    ></textarea>
                </div>
                <button>Add</button>
            </form>
        </>
    );
}
 
export default AddHome;