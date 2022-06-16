import Menu from '../../../Layouts/Admin/Menu.jsx'

import { useForm } from "react-hook-form";

const BookUpdate = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // reset();
    };

    return ( 
        <>
            <Menu />
            <div className="bookAdd__page">
                <h2>BookUpdate Page</h2>

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
                        <h3>difficulty: AAAAAAAAA</h3>
                        <input type="radio" id="easy" name="difficulty" value="easy"/>
                        <label htmlFor="easy">easy</label><br/>
                        <input type="radio" id="medium" name="difficulty" value="medium"/>
                        <label htmlFor="medium">medium</label><br/>
                        <input type="radio" id="difficult" name="difficulty" value="difficult"/>
                        <label htmlFor="difficult">difficult</label><br/>
                        {errors.difficulty && (<p>{errors.difficulty.message}</p>)}
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
                    
                    {/* <div className="">
                        <label htmlFor="image">image</label>
                        <input type="text" id="image"/>
                        <p>error</p>
                    </div> */}

                    <div className="">
                        <h3>category: hành động,trinh thám</h3>
                        <input type="checkbox" id="hành động" value="hành động"/>
                        <label htmlFor="hành động">hành động</label><br/>
                        <input type="checkbox" id="trinh thám" value="trinh thám"/>
                        <label htmlFor="trinh thám">trinh thám</label><br/>
                        <input type="checkbox" id="mạo hiểm" value="mạo hiểm"/>
                        <label htmlFor="mạo hiểm">mạo hiểm</label><br/>
                        {errors.category && (<p>{errors.category.message}</p>)}
                    </div>
                    {/* //////////////////////////////////////////// */}

                    {/* <div className="">
                        <h3>difficulty: AAAAAAAAA</h3>
                        <input type="radio" id="easy" name="difficulty" value="easy"
                            {...register("difficulty",{
                                // required: {
                                //     value: true,
                                //     message: "difficulty không được trống"
                                // },
                            })}
                        />
                        <label htmlFor="easy">easy</label><br/>
                        <input type="radio" id="medium" name="difficulty" value="medium"
                            {...register("difficulty",{
                                // required: {
                                //     value: true,
                                //     message: "difficulty không được trống"
                                // },
                            })}
                        />
                        <label htmlFor="medium">medium</label><br/>
                        <input type="radio" id="difficult" name="difficulty" value="difficult"
                            {...register("difficulty",{
                                // required: {
                                //     value: true,
                                //     message: "difficulty không được trống"
                                // },
                            })}
                        />
                        <label htmlFor="difficult">difficult</label><br/>
                        {errors.difficulty && (<p>{errors.difficulty.message}</p>)}
                    </div>
                    

                    <div className="">
                        <h3>category: hành động,trinh thám</h3>
                        <input type="checkbox" id="hành động" value="hành động"/>
                        <label htmlFor="hành động">hành động</label><br/>
                        <input type="checkbox" id="trinh thám" value="trinh thám"/>
                        <label htmlFor="trinh thám">trinh thám</label><br/>
                        <input type="checkbox" id="mạo hiểm" value="mạo hiểm"/>
                        <label htmlFor="mạo hiểm">mạo hiểm</label><br/>
                        {errors.category && (<p>{errors.category.message}</p>)}
                    </div> */}

                    <button>Update</button>
                </form>

            </div>
        </>
    );
}
 
export default BookUpdate;