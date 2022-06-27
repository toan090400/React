import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

const BookAdd = () => {
    const [getMessage, setMessage] = useState('');
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

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const postData = await axios.post('http://localhost:5000/api/books',data);
            setMessage(postData.data.message);
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (  
        <>
            <Menu />
            <div className="bookAdd__page">
                <h2>BookAdd Page</h2>
                <h2>Thông báo: {getMessage}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <h3>difficult:</h3>
                        <input type="radio" id="easy" value="easy"
                            {...register("difficulty",{
                                required: {
                                    value: true,
                                    message: "difficulty không được trống"
                                },
                            })}
                        />
                        <label htmlFor="easy">easy</label><br/>
                        <input type="radio" id="medium" value="medium"
                            {...register("difficulty",{
                                required: {
                                    value: true,
                                    message: "difficulty không được trống"
                                },
                            })}
                        />
                        <label htmlFor="medium">medium</label><br/>
                        <input type="radio" id="difficult" value="difficult"
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

                    <div className="">
                        <h3>category:</h3>
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

                    <button>Add</button>
                </form>

            </div>
        </>
    );
}
 
export default BookAdd;