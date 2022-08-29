
import menu from '../assets/icons/menu.svg'
import cart from '../assets/icons/cart.svg'
import user from '../assets/icons/user.svg'

export function MenuBtn() {
    return ( 
        <button className="menu-btn">
            <img src={menu} alt="menu-icon"/>
            <span>Menu</span>
        </button>
     );
}

export function CartBtn() {
    return ( 
        <div className='cart-btn-wrapper'>
            <button className="cart-btn">
                <img src={cart} alt="cart-icon"/>
            </button>
            <div className='cart-counter'>{3}</div>
        </div>
     );
}

export function UserBtn() {
    return ( 
        <button className='user-btn'>
            <img src={user} alt="user-icon"/>
        </button>
     );
}



