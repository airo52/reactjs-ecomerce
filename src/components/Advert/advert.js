import React from 'react';
import AdvertCard from '../commons/cards/advertCard';
import fakeData from '../../datas/fakeData';
const Advert = ()=>{
    const adverts =  fakeData.filter(item => item.category === "advert");
    return (
        <div className="banner-3-area">
          <div className="container">
            <div className="row">
                 {adverts.map((item,index)=>{
                 return <AdvertCard key={index} image={item.image} title={item.title} products={item.products}/>
                 })}
            </div>
          </div>
        </div>
    )
}

export default Advert;