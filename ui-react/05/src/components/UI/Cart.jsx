import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    return (
        <div className="cart">
            {props.children}
        </div>
    );
}
 
export default Cart;