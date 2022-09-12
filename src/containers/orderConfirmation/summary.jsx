import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import { CartItem } from '../../components/cartItem';
import {CartLoader} from '../../components/cartHandler'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { form } from '../../actions/pageActions'

export function Summary() {

    const cart = useSelector(state => state.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        var total = 0

        cart.forEach(element => {
            total += element.price * element.amount
        });

        setTotalPrice(total)
    },[cart])

    return ( 
        <div className="cart-summary cart-page">
            <CartLoader/>
            <h2>Your cart</h2>
            <div className="cart-items">
                {
                    cart.map((item, index) => (
                        <CartItem id={item.id} size={item.size} amount={item.amount} thumbnail={item.thumbnail} name={item.name} price={(item.price * item.amount).toFixed(2)} key={index}/>
                    ))
                }
            </div>
            <div className="cart-total">
                <h4>Total price:</h4>
                <h3>{totalPrice.toFixed(2)}€</h3>
            </div>
            <div className="actions">
                <Link to="/PlusShoes" className="secondary-action">Back to shopping</Link>
                <button className={cart.length ? "primary-action" : "primary-action primary-action-disabled"} onClick={()=>{dispatch(form())}}>Continue</button>
            </div>
        </div>
     );
}
