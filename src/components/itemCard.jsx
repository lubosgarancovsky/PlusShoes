import cart from '../assets/icons/cart.svg'

export function ItemCard({thumbnail, price, name, sizes, color}) {
    return ( 
        <div className="item-card">
            <div className="item-picture" style={{backgroundColor: `${color}`}}>
                <img src={thumbnail} alt="shoe_thumbnail"/>
            </div>

            <div className="item-desc">
                <h3>{price}€</h3>
                <h4>{name}</h4>


                <p>Choose size:</p>
                <div className="sizes">
                    {
                        sizes.map((size, index) => (
                            <div key={index} className="shoe-size">{size}</div>
                        ))
                    }
                </div>
            </div>

            <div className="item-button">
                    <button className="add-to-cart">Add to cart <img src={cart} alt="cart-icon"/></button>
            </div>

        </div>
     );
}
