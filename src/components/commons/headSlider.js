import React from 'react';

const Slider =({item})=>{
        return  <div  className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url('+item.backgroundImage+')'}}>
        <div className="container">
          <div className="slider-content-5 slider-animated-1 text-left">
            <span className="animated">{item.status}</span>
            <h1 className="animated">
              <strong> {item.title} </strong><br />
              {item.shop}
            </h1>
            <p className="animated">{item.decsription}</p>
            <a href="#gotShop" className="shop-btn animated">SHOP NOW</a>
          </div>
        </div>
      </div>
}

export default Slider;