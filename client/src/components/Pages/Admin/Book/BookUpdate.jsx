import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const BookUpdate = () => {

    let { id } = useParams();
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
    }, []);

    const [getMessage, setMessage] = useState('');
    const [getBook, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const getBook = await axios.get(`http://localhost:5000/api/books/${id}`);
                
                setBook(getBook.data);
            } catch (error) {
                console.log(error)
            }
        };
        getBook();
    }, [id]);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        const patchData = await axios.patch(`http://localhost:5000/api/books/${id}`,data);
        setMessage(patchData.data.message);
        
    };
    
    return ( 
        <>
            <Menu />
            <div className="bookAdd__page">
                <h2>BookUpdate Page</h2>
                <h2>Thông báo: {getMessage}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4>name: {getBook.name}</h4>
                    </div>
                    <div className="">
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" 
                            
                            {...register("name",{
                                required: {
                                    value: true,
                                    message: "name không được trống"
                                },
                            })}
                        />
                        {errors.name && (<p>{errors.name.message}</p>)}
                    </div>
                    
                    <div className="">
                        <h3>difficulty: {getBook.difficulty}</h3>
                        <input type="radio" id="easy" name="difficulty" value="easy"
                            {...register("difficulty",{
                                required: {
                                    value: true,
                                    message: "difficulty không được trống"
                                },
                            })}
                        />
                        <label htmlFor="easy">easy</label><br/>
                        <input type="radio" id="medium" name="difficulty" value="medium"
                            {...register("difficulty",{
                                required: {
                                    value: true,
                                    message: "difficulty không được trống"
                                },
                            })}
                        />
                        <label htmlFor="medium">medium</label><br/>
                        <input type="radio" id="difficult" name="difficulty" value="difficult"
                            {...register("difficulty",{
                                required: {
                                    value: true,
                                    message: "difficulty không được trống"
                                },
                            })}
                        />
                        <label htmlFor="difficult">difficult</label><br/>
                        {errors.difficulty && (<p>{errors.difficulty.message}</p>)}
                    </div>
                    <div>
                        <h4>description: {getBook.description}</h4>
                    </div>
                    <div className="">
                        <label htmlFor="description">description</label>
                        <input type="text" id="description" 
                            {...register("description",{
                                required: {
                                    value: true,
                                    message: "description không được trống"
                                },
                            })}
                        />
                        {errors.description && (<p>{errors.description.message}</p>)}
                    </div>
                    
                    {/* <div className="">
                        <label htmlFor="image">image</label>
                        <input type="text" id="image"/>
                        <p>error</p>
                    </div> */}

                    {/*  */}
                    <div className="">
                        <h3>
                            category:
                            {getBook.category?.map( item => {
                                return(
                                    <div key={item._id}>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })}
                        </h3>
                        {getCategorys.map( item => {
                            return(
                                <div key={item._id}>
                                    <input type="checkbox" id={item.name} name="category" value={item._id}
                                    {...register("category",{
                                        required: {
                                            value: true,
                                            message: "category không được trống"
                                        },
                                    })}
                                />
                                <label htmlFor={item.name}>{item.name}</label><br/>
                                </div>
                            )
                        })}
                        {errors.category && (<p>{errors.category.message}</p>)}
                    </div>

                    <button>Update</button>
                </form>

            </div>
        </>
    );
}
 
export default BookUpdate;