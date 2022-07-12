import './detail.css'
import MainHeader from '../Layout/MainHeader'

import { useParams } from 'react-router-dom';
import { useState } from 'react';

const USER = [
    {
        _id: 1,
        name: 'user 1',
        image: 'http://st.nettruyenco.com/data/comics/146/nguyen-ton.jpg',
        number: 1,
    },
    {
        _id: 2,
        name: 'user 2',
        image: 'http://st.nettruyenco.com/data/comics/92/giao-su-gian-diep.jpg',
        number: 2,
    },
]

const Detail = () => {
    const item = useParams().id;

    const data = USER.find(p => p.name === item);

    const [name, setName] = useState(data.name);
    const [number, setNumber] = useState(data.number);
    const [image, setImage] = useState(data.image);

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const numberHandler = (e) => {
        setNumber(e.target.value);
    };
    const imageHandler = (e) => {
        setImage(e.target.value);
    };

    const HandlerUpdate = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(number);
        // console.log(image);

        // setName('');
        // setNumber('');
        // setImage('');
    }
    return (  
        <>
            <MainHeader />
            <h1>Detail</h1>
            <form onSubmit={HandlerUpdate}>
                <div className="div">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div className="div">
                    <label htmlFor="number">Number</label>
                    <input 
                        type="text" 
                        id="number"
                        value={number}
                        onChange={numberHandler}
                    />
                </div>
                <div className="div">
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
                <button>Update</button>
            </form>
        </>
    );
}
 
export default Detail;