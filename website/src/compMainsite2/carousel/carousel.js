import './carousel.css';
import React ,{useState} from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft }from 'react-icons/fa';

const SliderMain2 = ({carouselIMage}) => {
    const[current, setcurrent] = useState(0)
    const length= carouselIMage.length
    const nextSlide =() =>{
      setcurrent(current===length - 1?0:current +1);
    }
    const prevSlide =() =>{
      setcurrent(current===0 ? length-1: current-1);
    }
  
    if(!Array.isArray(carouselIMage) || length <= 0){
      return null
    }

    return(
            <div className='control'>
                        <button><FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/></button>
                        <button><FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/></button>
                        <div className='slider'>
                            
                                {carouselIMage.map((slide, index)=>{
                                    return (
                                        <>
                                          <img src={slide.image} alt='travel' className={index===current ? 'slide'+' active' : 'slide other'}/>
                                            {/* <div className={index===current ? 'slide'+' active' : 'slide other'} key={index} id={index===current ? 'image': 'image'+ (index+1)}>
                                            </div> */}
                                        </>
                                    )
                                })}
        
                        </div>
            </div>
       
        
    )
}
export default SliderMain2