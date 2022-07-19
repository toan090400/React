import './user.css'
import MainHeader from '../Layout/MainHeader'

import { Link } from 'react-router-dom'

const USER = [
    {
        _id: 1,
        name: 'user 1',
        image: 'http://st.nettruyenco.com/data/comics/146/nguyen-ton.jpg',
    },
    {
        _id: 2,
        name: 'user 2',
        image: 'http://st.nettruyenco.com/data/comics/92/giao-su-gian-diep.jpg',
    },
]

const User = () => {
    
    return (  
        <>
            <MainHeader />
            <h1>user page</h1>
            {USER.map(item =>(
                <div key={item._id}>
                    <p>Name: {item.name}</p>
                    <img src={item.image} alt={item.name} />
                    {/* <Link to={`/user/${item.name}`} >Detail</Link> */}
                </div>
            ))}
        </>
    );
}
 
export default User;