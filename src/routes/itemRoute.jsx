import { SmallCart } from "../components/smallCart";
import { TopBar } from "../containers/topbar";
import { AddToCartBtn } from "../components/buttons";


import {useState } from "react";

export function ItemRoute() {

    const [selectedItem, setSelectedItem] = useState(JSON.parse(sessionStorage.getItem('selected-item')))
    const [selectedSize, setSelectedSize] = useState(selectedItem.sizes[0])

    const handleChange = event => {
        setSelectedSize(event.target.value)
    }

    return ( 
        <div className="item-route">
            <TopBar/>
            <SmallCart/>

            <div className="item-container">
                <div className="item-thumbnail">
                    <img src={selectedItem.thumbnail}/>
                </div>

                <div className="item-description">
                    <div className="description">
                        <h1>{selectedItem.name}</h1>
                        <p>Choose size:</p>
                        <select name="select-size" onChange={handleChange}>
                            {
                               selectedItem.sizes.map((size, index) => (
                                    <option value={size} key={index}>{size}</option>
                                ))
                            }
                        </select>
                        
                    </div>
                    <div className="add-cart-btn">
                        <AddToCartBtn thumbnail={selectedItem.thumbnail} price={selectedItem.price} name={selectedItem.name} size={selectedSize}/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}


/*
<select name="select-size" onChange={handleChange}>
                        {
                            item.sizes.map((size, index) => (
                                <option value={size} key={index}>{size}</option>
                            ))
                        }
                    </select>


                        const handleChange = event => {
        setSelectedSize(event.target.value)
    }


*/