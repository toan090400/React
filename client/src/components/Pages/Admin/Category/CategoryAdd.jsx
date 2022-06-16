import Menu from '../../../Layouts/Admin/Menu.jsx'

const CategoryAdd = () => {
    return (  
        <>
            <Menu />
            <div className="categoryAdd__page">
                <h2>CategoryAdd Page</h2>
                
                <div className="">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name"/>
                    <p>error</p>
                </div>
                <div className="">
                    <label htmlFor="description">description</label>
                    <input type="text" id="description"/>
                    <p>error</p>
                </div>
                
                <button>Add</button>

            </div>
        </>
    );
}
 
export default CategoryAdd;