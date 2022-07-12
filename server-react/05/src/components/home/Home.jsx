import './home.css';

import MainHeader from '../Layout/MainHeader';

const HOME = [
    {
        _id: 1,
        name: 'home 1',
        image: 'https://pix8.agoda.net/hotelImages/8091632/-1/324b2daa1183511766d8469578f49c33.jpg?ca=9&ce=1&s=1024x768',
        number: 1,
    },
    {
        _id: 2,
        name: 'home 2',
        image: 'https://pix8.agoda.net/hotelImages/8091632/-1/8ba6f402d8bcff1cd7bc482df0256aa7.jpg?ca=9&ce=1&s=1024x768',
        number: 2,
    },
];

const Home = () => {
    return (  
        <>
            <MainHeader/>
            <h1>home page</h1>
            {HOME.length < 1 ? 
                <h1>No home ...</h1>
                :
                HOME.map(item =>(
                    <div key={item._id}>
                    <p>Name: {item.name}</p>
                    <p>Number: {item.number}</p>
                    <img src={item.image} alt={item.name} />
                    {/* <Link to={`/user/${item._id}`} >Detail</Link> */}
                </div>
                ))
            }
        </>
    );
}
 
export default Home;