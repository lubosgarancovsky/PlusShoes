
import { useDispatch} from "react-redux";
import { useEffect} from "react";
import { storeWholeCart } from "../actions/cartActions";

// Loads cart after refreshing site

export function CartLoader() {

    const dispatch = useDispatch()

    useEffect(()=>{
        const loadedCart = JSON.parse(sessionStorage.getItem('cart-content'))

        if (loadedCart === null) {
            dispatch(storeWholeCart([]))
        } else {
            dispatch(storeWholeCart(loadedCart))
        }
        
    },[])

    return null;
}

