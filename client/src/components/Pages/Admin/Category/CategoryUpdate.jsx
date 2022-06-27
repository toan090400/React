import Menu from '../../../Layouts/Admin/Menu.jsx'

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const CategoryUpdate = () => {

    // lấy id data
    let { id } = useParams();
    let navigate = useNavigate();
    // lấy tất cả thông tin của data
    const [getMessage, setMessage] = useState('');
    const [getData, setData] = useState('');
    

    // react-hook-form
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const patchData = await axios.patch(`http://localhost:5000/api/categorys/${id}`,data);
            setMessage(patchData.data.message);
            navigate(`/admin/category`)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const getCategory = async () => {
            try {
                const getCategory = await axios.get(`http://localhost:5000/api/categorys/${id}`);
                setData(getCategory.data);
                
            } catch (error) {
                console.log(error)
            }
        };
        getCategory();
    }, [id]); // khi id thay đổi thì sẽ chạy lại 

    return (  
        <>
            <Menu />
            <div className="categoryAdd__page">
                <h2>CategoryUpdate Page</h2>
                <h2>Thông báo: {getMessage}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4>name: {getData.name}</h4>
                    </div>
                    <div className="">
                        <label htmlFor="name">new name</label>
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
                    <div>
                        <h4>description: {getData.description}</h4>
                    </div>
                    <div className="">
                        
                        <label htmlFor="description">new description</label>
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
                    
                    <button>Add</button>
                </form>

            </div>
        </>
    );
}
 
export default CategoryUpdate;