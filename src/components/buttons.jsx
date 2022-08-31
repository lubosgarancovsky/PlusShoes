
import menu from '../assets/icons/menu.svg'
import cartIcon from '../assets/icons/cart.svg'
import user from '../assets/icons/user.svg'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openCart } from '../actions/contentActions';
import { storeCart } from '../actions/cartActions';
import { useEffect, useState } from 'react';
import { sessionStoreCart } from '../scripts/storeCart';

import { motion } from 'framer-motion';
import { toggleMenu } from '../actions/menuActions';

export function MenuBtn() {

    const dispatch = useDispatch()

    const handleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <button className="menu-btn" onClick={handleMenu}>
            <img src={menu} alt="menu-icon" />
            <span>Menu</span>
        </button>
    );
}

export function CartBtn() {

    const [total, setTotal] = useState(0)

    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(openCart())
    }

    useEffect(() => {
        var totalAmount = 0

        cartState.forEach(element => {
            totalAmount += element.amount
        });


        setTotal(totalAmount)
    }, [cartState])

    return (
        <div className='cart-btn-wrapper'>
            <button className="cart-btn" onClick={handleClick}>
                <img src={cartIcon} alt="cart-icon" />
            </button>

            <motion.div
                initial={{scale:1}}
                animate={{
                    scale: 1.2,
                    transition: {
                        duration: 0.3,
                        ease: 'easeInOut'
                    }
                }}

                key={total}
                className='cart-counter'>{total}</motion.div>
        </div>
    );
}

export function UserBtn() {
    return (
        <button className='user-btn'>
            <img src={user} alt="user-icon" />
        </button>
    );
}


export function AddToCartBtn({ thumbnail, price, name, size }) {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const addItem = () => {

        const item = {
            thumbnail: thumbnail,
            price: price,
            name: name,
            amount: 1,
            size: size,
            id: Date.now()
        }

        dispatch(storeCart(item))
        sessionStoreCart([...cart, item])
    }

    return (
        <button className="add-to-cart" onClick={addItem}>
            Add to cart
            <img src={cartIcon} alt="cart-icon" />
        </button>
    );
}


