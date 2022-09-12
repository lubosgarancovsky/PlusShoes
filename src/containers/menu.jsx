import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import { filterAction } from '../actions/filters'
import { toggleMenu } from '../actions/menuActions'
 
export function Menu() {

    const isOpen = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const applyFilter = (gender, category) => {
        dispatch(filterAction({gender, category}))
        dispatch(toggleMenu())
    }

    return ( 
        <AnimatePresence>
         {
            isOpen && 
            <motion.div className="menu"
            initial={{x:'-100%'}}
            animate={{x:'0'}}
            transition={{duration: 0.3, ease:'easeIn'}}
            exit={{x:'-100%'}}
            key={isOpen}
        >
            <div className="men">
                <h2>Men</h2>
                <ul>
                    <li><a onClick={() => {applyFilter('M', 'Sneakers')}}>Sneakers</a></li>
                    <li><a onClick={() => {applyFilter('M', 'Low Shoes')}}>Low shoes</a></li>
                </ul>
            </div>

            <div className="women">
                <h2>Women</h2>
                <ul>
                    <li><a onClick={() => {applyFilter('F', 'Sneakers')}}>Sneakers</a></li>
                    <li><a onClick={() => {applyFilter('F', 'High Heels')}}>High Heels</a></li>
                </ul>
            </div>
            
        </motion.div>
        }
        </AnimatePresence>
       
        
     );
}

