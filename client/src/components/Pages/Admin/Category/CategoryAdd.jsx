import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";

const CategoryAdd = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    
    return (  
        <>
            <Menu />
            <div className="categoryAdd__page">
                <h2>CategoryAdd Page</h2>
                
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
                    
                    <button>Add</button>
                </form>

            </div>
        </>
    );
}
 
export default CategoryAdd;