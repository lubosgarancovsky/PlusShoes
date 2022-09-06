import { useSelector} from "react-redux";

export function CartNavigation() {

    const activePage = useSelector(state => state.page)

    return ( 
        <div className="page-navigation">
            <div className={activePage == 0 ? "navitem active-item" : 'navitem'}>
                Cart
            </div>

            <div className={activePage == 1 ? "navitem active-item" : 'navitem'}>
                Delivery
            </div>

            <div className={activePage == 2 ? "navitem active-item" : 'navitem'}>
                Finish order
            </div>
        </div>
    );
}
