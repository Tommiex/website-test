import "./maincontain.css";
import React ,{useState} from 'react';
import { SliderData } from './imagedata.js';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft }from 'react-icons/fa';
import './carou.css';
const Slider = ({slides}) => {
    const[current, setcurrent] = useState(0)
    const length= slides.length
    const nextSlide =() =>{
      setcurrent(current===length - 1?0:current +1);
    }
    const prevSlide =() =>{
      setcurrent(current===0 ? length-1: current-1);
    }
  
    if(!Array.isArray(slides) || length <= 0){
      return null
    }

    return(
        <div className="main-contain">
            <div className='control'>
                        <button><FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/></button>
                        <button><FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/></button>
                        <div className='slider'>
                            {/* <div className="grid-carou"> */}
                                {SliderData.map((slide, index)=>{
                                return (
                                    // <div className={index===current ? 'slide active' : 'slide'} key={index} id={'image'+ index}>
                                    <>
                                    {index===current && (
                                        <div className={"slide center"} id={"active"}>
                                            <img src={slide.image} alt='travel' className={'image center'}/>
                                        </div>
                                        
                                    )}
                                    {index===(current-1) && (
                                        <div className={"slide slide-left" + " left"} id={'image'}>
                                            <img src={slide.image} alt='travel' className={'image-left'}/>
                                        </div>
                                    )}
                                    {index===(current+1) &&(
                                         <div className="slide slide-right" id={'image'}>
                                            <img src={slide.image} alt='travel' className={'image-right'}/>
                                         </div>
                                    )}
                                    {index<(current-1) &&(
                                         <div className="slide slide-left hide" id={'image'}>
                                            <img src={slide.image} alt='travel' className={'image-left-hide'}/>
                                         </div>
                                    )}
                                    {index>(current+1) &&(
                                         <div className="slide slide-right hide" id={'image'}>
                                            <img src={slide.image} alt='travel' className={'image-right-hide'}/>
                                         </div>
                                    )}
                                    </>
                                    
                                    // </div>
                                    )
                                })}
                            {/* </div> */}
        
                        </div>
                    </div>
            {/* <div className="main-carou-fixed">
                <div className="main-carousel"> 
                    
                </div>
            </div> */}
            
            <div className="main-review"></div>
            
        </div>
        
    )
}
export default Slider

// carousel  เปลี่ยนไปใช้แบบกดแล้วเลื่อน แล้วเปลี่ยนcssตามตำแหน่งบนแกนX
