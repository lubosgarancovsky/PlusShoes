import cart from '../assets/icons/cart.svg'

import { useState} from 'react'

import { useDispatch } from 'react-redux'
import { storeCart } from '../actions/cartActions'

export function ItemCard({thumbnail, price, name, sizes}) {

    const dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState(sizes[0])


    const handleChange = event => {
        setSelectedSize(event.target.value)
    }

    const addItem = () => {

        const item = {
            thumbnail: thumbnail,
            price: price,
            name: name,
            amount: 1,
            size: selectedSize,
            id: Date.now()
        }

        dispatch(storeCart(item))
    }

    return ( 
        <div className="item-card">
            <div className="item-picture">
                <img src={thumbnail} alt="shoe_thumbnail"/>
            </div>

            <div className="item-desc">
                <div className="price-name">
                    <h3>{price}€</h3>
                    <h4>{name}</h4>
                </div>

                <div className="sizes">
                    <p className='choose-size'>Choose size:</p>
                    <select name="select-size" onChange={handleChange}>
                        {
                            sizes.map((size, index) => (
                                <option value={size} key={index}>{size}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="item-button">
                    <button className="add-to-cart" onClick={addItem}>Add to cart <img src={cart} alt="cart-icon"/></button>
            </div>

        </div>
     );
}
