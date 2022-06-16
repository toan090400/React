import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";

const CategoryUpdate = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (  
        <>
            <Menu />
            <div className="categoryAdd__page">
                <h2>CategoryUpdate Page</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" defaultValue={"AAAAAAAAA"}
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
                        <input type="text" id="description" defaultValue={"AAAAAAAAA"}
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