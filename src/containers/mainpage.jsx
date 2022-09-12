import { ItemCard } from '../components/itemCard'

import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


export function MainPage() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const filterObject = useSelector(state => state.filter)

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
    },[])

    if (loading) {
        return(
            <main>
                <h1>Loading...</h1>
            </main> 
        )
    }
    
    if (error) {
        return(
            <main>
                <h1>There has been an error while loading data</h1>
            </main> 
        )
    }

    return ( 
        <main>
            <div className="filters">
                <ul>
                    <li>{filterObject.gender + ' >> '}</li>
                    <li>{filterObject.category}</li>
                </ul>
            </div>
            <div className='goods-grid'>
                {
                    data.filter(item => (item.gender === filterObject.gender || item.gender === 'U') && item.category === filterObject.category).map((item, index) => (
                        <ItemCard key={index} thumbnail={item.thumbnail} name={item.name} price={item.price} sizes={item.sizes} gender={item.gender} category={item.category}/>
                    ))
                }
            </div>
        </main>
    );
}


