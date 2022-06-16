import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";

const BookAdd = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (  
        <>
            <Menu />
            <div className="bookAdd__page">
                <h2>BookAdd Page</h2>

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
                        <input type="checkbox" id="hành động" name="category" value="hành động"
                            {...register("category",{
                                required: {
                                    value: true,
                                    message: "category không được trống"
                                },
                            })}
                        />
                        <label htmlFor="hành động">hành động</label><br/>
                        <input type="checkbox" id="trinh thám" name="category" value="trinh thám"
                            {...register("category",{
                                required: {
                                    value: true,
                                    message: "category không được trống"
                                },
                            })}
                        />
                        <label htmlFor="trinh thám">trinh thám</label><br/>
                        <input type="checkbox" id="mạo hiểm" name="category" value="mạo hiểm"
                            {...register("category",{
                                required: {
                                    value: true,
                                    message: "category không được trống"
                                },
                            })}
                        />
                        <label htmlFor="mạo hiểm">mạo hiểm</label><br/>
                        {errors.category && (<p>{errors.category.message}</p>)}
                    </div>

                    <button>Add</button>
                </form>

            </div>
        </>
    );
}
 
export default BookAdd;