import Menu from '../../../Layouts/Admin/Menu.jsx'

const BookAdd = () => {
    return (  
        <>
            <Menu />
            <div className="bookAdd__page">
                <h2>BookAdd Page</h2>

                <div className="">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name"/>
                    <p>error</p>
                </div>
                <div className="">
                    <h3>isAdmin:</h3>
                        <input type="radio" id="easy" name="difficulty" value="easy"/>
                        <label for="easy">easy</label><br/>
                        <input type="radio" id="medium" name="difficulty" value="medium"/>
                        <label for="medium">medium</label><br/>
                        <input type="radio" id="difficult" name="difficulty" value="difficult"/>
                        <label for="difficult">difficult</label><br/>
                    <p>error</p>
                </div>
                
                <div className="">
                    <label htmlFor="description">description</label>
                    <input type="text" id="description"/>
                    <p>error</p>
                </div>
                
                {/* <div className="">
                    <label htmlFor="image">image</label>
                    <input type="text" id="image"/>
                    <p>error</p>
                </div> */}

                <div className="">
                    <h3>category:</h3>
                        <input type="checkbox" id="hành động" name="category" value="hành động"/>
                        <label for="hành động">hành động</label><br/>
                        <input type="checkbox" id="trinh thám" name="category" value="trinh thám"/>
                        <label for="trinh thám">trinh thám</label><br/>
                        <input type="checkbox" id="mạo hiểm" name="category" value="mạo hiểm"/>
                        <label for="mạo hiểm">mạo hiểm</label><br/>
                    <p>error</p>
                </div>

                <button>Add</button>

            </div>
        </>
    );
}
 
export default BookAdd;