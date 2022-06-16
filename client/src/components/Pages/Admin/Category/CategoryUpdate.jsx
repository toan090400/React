import Menu from '../../../Layouts/Admin/Menu.jsx'

const CategoryUpdate = () => {
    return (  
        <>
            <Menu />
            <div className="categoryAdd__page">
                <h2>CategoryUpdate Page</h2>
                
                <div className="">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" value="AAAAAAAAA"/>
                    <p>error</p>
                </div>
                <div className="">
                    <label htmlFor="description">description</label>
                    <input type="text" id="description" value="AAAAAAAAA"/>
                    <p>error</p>
                </div>
                
                <button>Add</button>

            </div>
        </>
    );
}
 
export default CategoryUpdate;