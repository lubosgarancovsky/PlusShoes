import { CartBtn, MenuBtn,  UserBtn} from "../components/buttons";
import { Link } from "react-router-dom";

export function TopBar() {
    return ( 
        <div className="top-bar">
            <div className="top-bar-box-1">
                <MenuBtn/>
            </div>

            <div className="top-bar-box-2">
                <Link to="/PlusShoes" style={{textDecoration: 'none'}}><h3><span>+</span>Shoes</h3></Link>
            </div>

            <div className="top-bar-box-3">
                <UserBtn/>
                <CartBtn/>
            </div>
        </div>
     );
}
