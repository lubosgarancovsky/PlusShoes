import { useDispatch } from 'react-redux';
import { summary, details} from '../../actions/pageActions'
import { sendData} from '../../actions/formActions'
import { useState } from 'react';

export function Form() {

    const dispatch = useDispatch()

    const handleForm = (e) => {
        var formState = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            city: e.target.city.value,
            postcode: e.target.postcode.value,
            country: e.target.country.value,
            message: e.target.message.value,
        }
        
        dispatch(sendData(formState))
        dispatch(details())
        e.preventDefault()
    }

    return (
        <div className="cart-form cart-page">
            <h2>Delivery details</h2>
            <form onSubmit={handleForm}>
                <div className="group-wrapper">
                    <div className="group-1">
                        <label for='name'> First name:</label>
                        <input id="name" type="text" required></input>

                        <label for='surname'> Last name:</label>
                        <input id="surname" type="text" required ></input>

                        <label for='email'> E-mail:</label>
                        <input id="email" type="email" required ></input>

                        <label for='phone'> Phone number:</label>
                        <input id="phone" type="tel" required ></input>
                    </div>

                    <div className="group-2">
                        <label for='address'> Address:</label>
                        <input id="address" type="text" required ></input>

                        <label for='city'> City:</label>
                        <input id="city" type="text" required ></input>

                        <label for='postcode'> Postcode:</label>
                        <input id="postcode" type="number" required ></input>

                        <label for='country'> Country:</label>
                        <select id="country" type="text" required>
                            <option>Slovak Republic</option>
                            <option>Czech Republic</option>
                        </select>
                    </div>

                    <div className="group-3">
                        <label for='message'> Message (optional):</label>
                        <textarea rows={5} id="message" type="text"></textarea>

                       <div className="checkbox">
                            <input id="terms" type="checkbox" required></input>
                            <label for='terms'> I agree with terms and conditions:</label>
                       </div>

                       <input className="primary-action" value='Continue' type='submit'/>
                       <button className="secondary-action" onClick={()=>{dispatch(summary())}}>Back to cart</button>
                    </div>
                </div>
                
            </form>
        </div>
    );
}
