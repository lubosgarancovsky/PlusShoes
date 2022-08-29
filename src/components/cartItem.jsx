import {useDispatch} from 'react-redux'
import {removeFromCart, increment, decrement} from '../actions/cartActions'

export function CartItem({name, price, thumbnail, id, amount, size}) {

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(removeFromCart(id))
    }

    const inc = () => {
        dispatch(increment(id))
    }

    const dec = () => {
        dispatch(decrement(id))
    }
    
    

    return ( 
        <div className="cart-item">
            <div className="thumbnail">
                <img src={thumbnail} alt="thumbnail"/>
            </div>

            <div className="name">
                {`${name} - ${size}`}
            </div>

            <div className="amount">
                <button className="set-amount" onClick={dec}>-</button>
                <span className="amount-display">{amount}</span>
                <button className="set-amount" onClick={inc}>+</button>
            </div>

            <div className="price">
                <h2>{price}€</h2>
            </div>

            <div className="delete">
                <button onClick={deleteItem}>X</button>
            </div>
        </div>
     );
}
