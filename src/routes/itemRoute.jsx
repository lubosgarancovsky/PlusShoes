import { SmallCart } from "../components/smallCart";
import { TopBar } from "../containers/topbar";
import { AddToCartBtn } from "../components/buttons";
import {CartLoader} from '../components/cartHandler'

import {useState, useEffect } from "react";

import { SimilarItem } from "../components/similarItem";

export function ItemRoute() {

    const [selectedItem, setSelectedItem] = useState(JSON.parse(sessionStorage.getItem('selected-item')))
    const [selectedSize, setSelectedSize] = useState(selectedItem.sizes[0])

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const handleChange = event => {
        setSelectedSize(event.target.value)
    }

    const getNewItem = () => {
        setSelectedItem(JSON.parse(sessionStorage.getItem('selected-item')))
    }


    const fetchData = () => {
        setLoading(true)
        fetch('https://lubosgarancovsky.github.io/PlusShoes/Data/data.json')
        .then((response) =>{
            if (response.ok){
                setError(false)
                return response.json()
            }
            throw response
        })
        .then((data) =>{
            setData(data)
        })
        .catch((error) => {
            console.log(error)
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [selectedItem])

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

            <div className="similar">
                <div className="goods-grid">
                    {
                        data.filter(item => (item.gender === selectedItem.gender || item.gender === 'U') && (item.category === selectedItem.category) && (item.name != selectedItem.name))
                        .map((item, index) => (
                            <SimilarItem key={index} name={item.name} thumbnail={item.thumbnail} price = {item.price} sizes={item.sizes} category={item.category} gender={item.gender} getNewItem={getNewItem}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}