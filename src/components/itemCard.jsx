import cart from '../assets/icons/cart.svg'

import { useState} from 'react'

import { useDispatch } from 'react-redux'
import { storeCart } from '../actions/cartActions'
import { openItem } from '../actions/selectedItemActions'

import { AddToCartBtn } from './buttons'

import { Link } from 'react-router-dom'

export function ItemCard({thumbnail, price, name, sizes}) {

    const dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState(sizes[0])


    const handleChange = event => {
        setSelectedSize(event.target.value)
    }



    const getItem = () => {
        const selectedItem = {
            thumbnail: thumbnail,
            price: price,
            name: name,
            sizes: sizes,
        }

        sessionStorage.setItem('selected-item', JSON.stringify(selectedItem))
        //console.table(JSON.parse(sessionStorage.getItem('selected-item')))
        dispatch(openItem(selectedItem))
    }


    return ( 
        <div className="item-card">
            <Link to='Item' onClick={getItem}>
                <div className="item-picture">
                    <img src={thumbnail} alt="shoe_thumbnail"/>
                </div>
            </Link>

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
                    <AddToCartBtn thumbnail={thumbnail} price={price} name={name} size={selectedSize}/>
            </div>

        </div>
     );
}
