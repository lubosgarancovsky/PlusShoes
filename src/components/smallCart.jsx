import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { openCart } from '../actions/contentActions';
import { CartItem } from './cartItem';

import {Link} from 'react-router-dom'

export function SmallCart() {

    const [totalPrice, setTotalPrice] = useState(0)

    const isOpen = useSelector(state => state.content)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(openCart())
    }

    useEffect(()=>{
        var total = 0

        cart.forEach(element => {
            total += element.price * element.amount
        });

        setTotalPrice(total)

        if (cart.length > 0) {
            document.querySelector('.go-to-cart').disabled = false;
        } else {
            document.querySelector('.go-to-cart').disabled = true;
        }
    },[cart])

    return ( 
        <div className={isOpen ? "small-cart" : "hidden"}>
            <div className="top">
                <div className="cart-info">
                    <h4>Total:</h4>
                    <h3>{totalPrice.toFixed(2)}€</h3>
                </div>
                <button className="cart-close" onClick={handleClose}>CLOSE</button>
            </div>

            <div className="content">
                {
                    cart.map((item, index) => (
                        <CartItem id={item.id} size={item.size} amount={item.amount} thumbnail={item.thumbnail} name={item.name} price={(item.price * item.amount).toFixed(2)} key={index}/>
                    ))
                }

                <Link to='/PlusShoes/Cart'>
                    <button className="go-to-cart">Go to cart</button>
                </Link>
                
            </div>
        </div>
     );
}
