import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './home.css'

import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <Header />
            <div className="home__page">
                <h2>Home Page</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                    <tr>
                        <td>Name1</td>
                        <td>
                            <Link to='/detail/:id'>Detail</Link>
                        </td>
                    </tr>
                    
                </table>
            </div>
            <Footer />
        </>
    );
}
 
export default Home;