import React,{useContext} from 'react';
import clasess from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../stored/CartContext';
const MealItem=(props) =>{
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;
    const addToCartHandler=amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    return (
        <li className={clasess.meal}>
            <div>
              <h3>{props.name}</h3> 
              <div className={clasess.description}>{props.description}</div>
              <div className={clasess.price}>{price}</div> 
              </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );

};
export default MealItem;