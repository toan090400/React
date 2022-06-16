import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './detail.css'

const Detail = () => {
    return (  
        <>
            <Header />
            <div className="detail__page">
                <h2>Detail Page</h2>
                <div className="div">
                    <p>name:</p>
                    <p>aaaaaaaaa</p>
                </div>
                <div className="div">
                    <p>difficulty:</p>
                    <p>bbbbbbbbb</p>
                </div>
                <div className="div">
                    <p>description:</p>
                    <p>cccccc</p>
                </div>
                <div className="div">
                    <p>image:</p>
                    {/* img lấy trong thư mục public */}
                    <img src="/assets/image-one/com_ga1.png" alt="com_ga1.png" />
                </div>
                <div className="div">
                    <p>user:</p>
                    <p>dddd</p>
                </div>
                <div className="div">
                    <p>category:</p>
                    <div>
                        <p>name1</p>
                        <p>description1</p>
                    </div>
                    <div>
                        <p>name2</p>
                        <p>description2</p>
                    </div>
                    <div>
                        <p>name3</p>
                        <p>description3</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Detail;