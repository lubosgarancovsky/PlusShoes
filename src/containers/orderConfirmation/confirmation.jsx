import { Link } from "react-router-dom";

export function Confirmation() {


    return ( 
        <div className="confirm-page cart-page">
            <h1>Thank you for your order</h1>

            <Link to='/PlusShoes' className="primary-action" 
            style={{
                textDecoration: 'none',
                width: '24rem',
                margin: ' 5rem auto'
            }}>
                Get back to shopping
                </Link>
        </div>
     );
}
