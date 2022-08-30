import { SmallCart } from "../components/smallCart";
import { TopBar } from "../containers/topbar";
import { AddToCartBtn } from "../components/buttons";
import {CartLoader} from '../components/cartHandler'

import {useState } from "react";

export function ItemRoute() {

    const [selectedItem, setSelectedItem] = useState(JSON.parse(sessionStorage.getItem('selected-item')))
    const [selectedSize, setSelectedSize] = useState(selectedItem.sizes[0])

    const handleChange = event => {
        setSelectedSize(event.target.value)
    }

    return ( 
        <div className="item-route">
            <CartLoader/>
            <TopBar/>
            <SmallCart/>

            <div className="item-container">
                <div className="item-thumbnail">
                    <img src={selectedItem.thumbnail}/>
                </div>

                <div className="item-description">
                    <div className="description">
                        <h1 style={{marginBottom:'2rem'}}>{selectedItem.name}</h1>


                        <p>Choose size:</p>
    
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        
                            <select name="select-size" onChange={handleChange}>
                                {
                                selectedItem.sizes.map((size, index) => (
                                        <option value={size} key={index}>{size}</option>
                                    ))
                                }
                            </select>
                            <h1>{selectedItem.price}€</h1>
                        </div>
                    </div>
                    <div className="add-cart-btn">
                        <AddToCartBtn thumbnail={selectedItem.thumbnail} price={selectedItem.price} name={selectedItem.name} size={selectedSize}/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}