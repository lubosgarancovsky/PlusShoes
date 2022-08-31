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
            
        </motion.div>
        }
        </AnimatePresence>
       
        
     );
}

