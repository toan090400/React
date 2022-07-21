import { useForm } from "react-hook-form";
import axios from "axios";

import './addHome.css';
import MainHeader from '../Layout/MainHeader';

const AddHome = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = await new FormData();
            formData.append('name', data.name);
            formData.append('number', data.number);
            formData.append('image', data.image[0]);
            await axios.post('http://localhost:5000/api/places',formData);
            reset();
        } catch (error) {
            console.log(error)
        }
        reset();
    };
    
    return (  
        <>
            <MainHeader />
            <h1>Add Home</h1>
            <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                <div className="">
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="number">Number</label>
                    <input type="text" id="number"
                        {...register("number",{
                            required: {
                                value: true,
                                message: "number không được trống"
                            },
                        })}
                    />
                    {errors.number && (<p>{errors.number.message}</p>)}
                </div>
                <div className="">
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image"
                        accept=".png, .jpg, .jpeg"
                        {...register("image",{
                            required: {
                                value: true,
                                message: "image không được trống"
                            },
                        })}
                    />
                    {errors.image && (<p>{errors.image.message}</p>)}
                </div>
                
                <button>Add</button>
            </form>
        </>
    );
}
 
export default AddHome;