import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import arrow from '../assets/icons/arrow.svg'
import { SlideOne, SlideTwo, SlideThree } from "../containers/sliderContent";

export function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slideBack = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }

    const slideForward = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }

    useEffect(()=>{
        const slideTimer = setTimeout(slideForward, 12000)

        return () => clearTimeout(slideTimer)

    },[currentSlide])

    return ( 
        <div className="carousel-slider">
            <motion.div className="slider-moving-box"
                initial={{x:'0%'}}
                animate={{
                    x: `${-currentSlide*100}vw`,
                    transition:{
                        duration: 0.8,
                        ease: 'easeInOut'
                    }
                }}
            >
                <div className="item">
                    <SlideOne/>
                </div>
                <div className="item">
                    <SlideTwo/>
                </div>
                <div className="item">
                    <SlideThree/>
                </div>
            </motion.div>

            <div className="slider-controls">
                <div className="arrow" onClick={slideBack}>
                    <img src={arrow} alt='arrow-icon'/>
                </div>

                <div className="arrow flipped" onClick={slideForward}>
                    <img src={arrow} alt='arrow-icon'/>
                </div>
            </div>
        </div>
     );
}
