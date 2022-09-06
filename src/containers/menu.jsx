import {useSelector} from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
 
export function Menu() {

    const isOpen = useSelector(state => state.menu)

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
            <h1 style={{padding: '10rem 0 0 0'}}>Work in progress</h1>
            
        </motion.div>
        }
        </AnimatePresence>
       
        
     );
}

