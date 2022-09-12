import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { form, confirmation } from '../../actions/pageActions'
import { resetCart } from "../../actions/cartActions";

export function Details() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const data = useSelector(state => state.form)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleFinish = () => {
        dispatch(confirmation())
        dispatch(resetCart())
    }

    useEffect(()=>{
        var total = 0

        cart.forEach(element => {
            total += element.price * element.amount
        });

        setTotalPrice(total)
    },[cart])

    return ( 
        <div className="cart-details cart-page">
            <h2>Order summary</h2>
            <div className="order-content">
                {
                    cart.map((item, index) => (
                        <div key={index} className="order-item">
                            <div className="top-info">
                                <h3>{item.name}</h3>
                                <h3>{(item.amount * item.price).toFixed(2)}€</h3>
                            </div>

                            <div className="photo">
                                <img src={item.thumbnail}/>
                            </div>
                            
                            <div className="bottom-info">
                                <h4>{item.amount} pc</h4>
                                <h4>Size: {item.size}</h4>
                                <h4>{item.price}€/pc</h4>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="delivery-details">
                <h4 style={{textAlign: 'center'}}>Delivery info</h4>
                <table>
                    
                    <tr>
                        <td>Name:</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Surname:</td>
                        <td>{data.surname}</td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{data.phone}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{data.address}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <td>Postcode:</td>
                        <td>{data.postcode}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{data.country}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{totalPrice.toFixed(2)}€</td>
                    </tr>
                    {
                        data.message && 
                        <tr>
                            <td>Message:</td>
                            <td>{data.message}</td>
                        </tr>
                    }
                </table>
            </div>

            <div className="actions">
                <button className="secondary-action" onClick={()=>{dispatch(form())}}>Back to form</button>
                <button className={cart.length ? "primary-action" : "primary-action primary-action-disabled"} onClick={handleFinish}>Finish order</button>
            </div>

        </div>
     );
}
