import React from 'react';
import fakeData from '../../datas/fakeData';
import Slider from '../commons/headSlider';

const HeadSlider = ()=>{
    const imageSlides =  fakeData.filter(item => item.for === "slider");
    
     return (
        
      <div className="slider-area">
      <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
        {/* Slider Single Item Start */}
          {imageSlides.map((item,index)=>{
           
             return <Slider key={index}  item={item}/>
          })}
          
        {/* Slider Single Item End */}
      </div>
    </div>
     )
}

export default  HeadSlider;