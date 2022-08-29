import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

import shoe_1 from '../assets/pictures/shoe_1.webp'
import shoe_2 from '../assets/pictures/shoe_2.webp'
import shoe_3 from '../assets/pictures/shoe_3.webp'
import shoe_4 from '../assets/pictures/shoe_4.webp'
import shoe_5 from '../assets/pictures/shoe_5.webp'
import shoe_6 from '../assets/pictures/shoe_6.webp'
import shoe_7 from '../assets/pictures/shoe_7.webp'
import shoe_8 from '../assets/pictures/shoe_8.webp'
import shoe_9 from '../assets/pictures/shoe_9.webp'


export function SlideOne() {

    const [picture, setPicture] = useState(0)
    const shoes = [shoe_1, shoe_2, shoe_3]

    const changePicture = () => {
        setPicture(picture === 2 ? 0 : picture + 1)
    }

    useEffect(()=>{
        const slideTimer = setTimeout(changePicture, 4000)

        return () => clearTimeout(slideTimer)

    },[picture])

    return ( 
        <div className="page page-one">
            <section className="text">
                <h1>Are you ready</h1>
                <h1><b>to lead the way</b></h1>
                <p>Luxury meets ultimate sitting comfort</p>
            </section>

            <section className="page-image">
                <motion.img src={shoes[picture]} alt="background-pictrue"
                key={picture}
                    animate={{
                        opacity: [0, 1],
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn'
                        }
                    
                    }}
                />
            </section>

            <section className="boxes">
                <div className={picture === 0 ? "box-item selected" : "box-item"} onClick={()=> setPicture(0)}>
                    <img src={shoes[0]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 1 ? "box-item selected" : "box-item"} onClick={()=> setPicture(1)}>
                    <img src={shoes[1]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 2 ? "box-item selected" : "box-item"} onClick={()=> setPicture(2)}>
                    <img src={shoes[2]} alt="shoe_thumbnail"/>
                </div>
            </section>
        </div>
     );
}

export function SlideTwo() {
  
    const [picture, setPicture] = useState(0)
    const shoes = [shoe_4, shoe_5, shoe_6]

    const changePicture = () => {
        setPicture(picture === 2 ? 0 : picture + 1)
    }

    useEffect(()=>{
        const slideTimer = setTimeout(changePicture, 4000)

        return () => clearTimeout(slideTimer)

    },[picture])

    return ( 
        <div className="page page-two">
            <section className="text">
                <h1>Take your style</h1>
                <h1><b>to another level</b></h1>
                <p>Get yourself a shoes that steal the party</p>
            </section>

            <section className="page-image">
                <motion.img src={shoes[picture]} alt="background-pictrue"
                key={picture}
                    animate={{
                        opacity: [0, 1],
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn'
                        }
                    
                    }}
                />
            </section>

            <section className="boxes">
                <div className={picture === 0 ? "box-item selected" : "box-item"} onClick={()=> setPicture(0)}>
                    <img src={shoes[0]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 1 ? "box-item selected" : "box-item"} onClick={()=> setPicture(1)}>
                    <img src={shoes[1]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 2 ? "box-item selected" : "box-item"} onClick={()=> setPicture(2)}>
                    <img src={shoes[2]} alt="shoe_thumbnail"/>
                </div>
            </section>
        </div>
     );
}


export function SlideThree() {
  
    const [picture, setPicture] = useState(0)
    const shoes = [shoe_7, shoe_8, shoe_9]

    const changePicture = () => {
        setPicture(picture === 2 ? 0 : picture + 1)
    }

    useEffect(()=>{
        const slideTimer = setTimeout(changePicture, 4000)

        return () => clearTimeout(slideTimer)

    },[picture])

    return ( 
        <div className="page page-three">
            <section className="text">
                <h1>You are</h1>
                <h1><b>the boss</b></h1>
                <p>Complete your fit and walk with confidence</p>
            </section>

            <section className="page-image">
                <motion.img src={shoes[picture]} alt="background-pictrue"
                key={picture}
                    animate={{
                        opacity: [0, 1],
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn'
                        }
                    
                    }}
                />
            </section>

            <section className="boxes">
                <div className={picture === 0 ? "box-item selected" : "box-item"} onClick={()=> setPicture(0)}>
                    <img src={shoes[0]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 1 ? "box-item selected" : "box-item"} onClick={()=> setPicture(1)}>
                    <img src={shoes[1]} alt="shoe_thumbnail"/>
                </div>

                <div className={picture === 2 ? "box-item selected" : "box-item"} onClick={()=> setPicture(2)}>
                    <img src={shoes[2]} alt="shoe_thumbnail"/>
                </div>
            </section>
        </div>
     );
}

