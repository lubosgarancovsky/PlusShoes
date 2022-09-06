import {TopBar} from '../containers/topbar'
import {Summary} from '../containers/summary'
import {Form} from '../containers/form'
import { SmallCart } from '../components/smallCart'
import { Details } from '../containers/details';

import { useDispatch, useSelector} from 'react-redux';
import { CartNavigation } from '../components/cartNavigation';
import { useEffect } from 'react';

import { summary } from '../actions/pageActions';
import { Confirmation } from '../containers/confirmation';

const pages = [<Summary/>, <Form/>, <Details/> , <Confirmation/>]

export function BigCart() {

    const page = useSelector(state => state.page)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(summary())
    },[])


    return ( 
        <div className="big-cart">
            <TopBar/>
            <SmallCart/>
            {
                page < 3 &&
                <CartNavigation/>
            }
            {
                pages[page]
            }
            
        </div>
     );
}
