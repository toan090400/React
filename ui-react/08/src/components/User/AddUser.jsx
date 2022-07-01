import './user.css'
import Card from '../UI/Card';

import { useState } from 'react';

const AddUser = () => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [error, setError] = useState({
        name:'',
        age:''
    });
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        // .trim() sẽ loại bỏ các khoảng trắng ở đầu và cuối chuỗi.
        if (enteredUsername.trim().length === 0 ) {
            setError({...error,name:'ko dc de trong'});
        }
        else if (Number(enteredAge) < 1) {
            setError({...error,age:'lon hon 0'});
        }
        else{
            console.log(enteredUsername,enteredAge)
            setEnteredUsername('')
            setEnteredAge('')
            setError('')
        }
        
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (  
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <p>{error.name}</p>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" 
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <p>{error.age}</p>
                <button className="button" type="submit">Add User</button>
            </form>
        </Card>
    );
}
 
export default AddUser;
