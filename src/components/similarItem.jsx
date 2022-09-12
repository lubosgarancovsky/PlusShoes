
import { useDispatch } from 'react-redux'
import { openItem } from '../actions/selectedItemActions'

export function SimilarItem({thumbnail, price, name, sizes, gender, category, getNewItem}) {

    const dispatch = useDispatch()

    const getItem = () => {
        const selectedItem = {
            thumbnail: thumbnail,
            price: price,
            name: name,
            sizes: sizes,
            gender: gender,
            category: category
        }

        sessionStorage.setItem('selected-item', JSON.stringify(selectedItem))
        dispatch(openItem(selectedItem))
        getNewItem()
    }

    return ( 
        <div className="similar-item-card">
            <div onClick={getItem}>
                <div className="item-picture">
                    <img src={thumbnail} alt="shoe_thumbnail"/>
                </div>
            </div>

            <div className="similar-item-card-desc">
                <div className="price-name">
                    <h3>{price}€</h3>
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
     );
}
