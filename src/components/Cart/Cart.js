import Modal from '../UI/Modal';
import clasess from './Cart.module.css';
const Cart=(props) =>{
    const cartItem=<ul className={['cart-itemss']}>{[{id:'c1',name:"dosa",amount:2,price:25}]
    .map((item)=>(<li>{item.name}</li>))}</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={clasess.total}>
                <span>Total amout</span>
                <span>35.00</span>
            </div>
            <div className={clasess.actions}>
            <button className={['button-alt']} onClick={props.onClose}>Close</button>
            <button className={[clasess.button]}>Order</button>
            </div>
        </Modal>
    );

};
export default Cart;