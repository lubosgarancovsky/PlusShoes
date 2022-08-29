import { ItemCard } from '../components/itemCard'

import shoe_1 from '../assets/pictures/shoe_1.webp'
import shoe_2 from '../assets/pictures/shoe_2.webp'
import shoe_3 from '../assets/pictures/shoe_3.webp'
import shoe_4 from '../assets/pictures/shoe_4.webp'
import shoe_5 from '../assets/pictures/shoe_5.webp'
import shoe_6 from '../assets/pictures/shoe_6.webp'
import shoe_7 from '../assets/pictures/shoe_7.webp'
import shoe_8 from '../assets/pictures/shoe_8.webp'
import shoe_9 from '../assets/pictures/shoe_9.webp'


const data = [
    <ItemCard thumbnail={shoe_1} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#FF9494'}/>,
    <ItemCard thumbnail={shoe_2} price={'129.99'} name={"Nike shoe 1"} sizes={[39, 40, 41, 42]} color={'#7177FF'}/>,
    <ItemCard thumbnail={shoe_3} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#ABFF83'}/>,
    <ItemCard thumbnail={shoe_4} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#FFF494'}/>,
    <ItemCard thumbnail={shoe_5} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#FF8B71'}/>,
    <ItemCard thumbnail={shoe_6} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#FF83EB'}/>,
    <ItemCard thumbnail={shoe_7} price={'129.99'} name={"Nike shoe 1"} sizes={[36, 37, 38, 40]} color={'#2b2bff'}/>,
    <ItemCard thumbnail={shoe_8} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#21ffc8'}/>,
    <ItemCard thumbnail={shoe_9} price={'129.99'} name={"Nike shoe 1"} sizes={[40, 41, 42, 43]} color={'#fa962a'}/>,
]

export function MainPage() {

    return ( 
        <main>
            <div className='goods-grid'>
                
                {
                    data.map((item) => (
                        item
                    ))
                }
               
               
            </div>
        </main>
     );
}


