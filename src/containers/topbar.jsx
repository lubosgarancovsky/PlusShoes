import { CartBtn, MenuBtn,  UserBtn} from "../components/buttons";

export function TopBar() {
    return ( 
        <div className="top-bar">
            <div className="top-bar-box-1">
                <MenuBtn/>
            </div>

            <div className="top-bar-box-2">
                <h3><span>+</span>Shoes</h3>
            </div>

            <div className="top-bar-box-3">
                <UserBtn/>
                <CartBtn/>
            </div>
        </div>
     );
}
