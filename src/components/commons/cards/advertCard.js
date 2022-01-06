import React from 'react';

const AdvertCard = ({image,title,products})=>{
      return <div  className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
      <div className="banner-wrapper">
      <a href="#goToShop"><img style={{height:"300px"}} src={image} alt="" /></a>
      </div>
      <div className="desc-listcategoreis">
    <div className="name_categories">
    <h2 >{title}</h2>
    </div>
    <span style={{color:"#000"}} className="number_product">{products}</span>
    <a href="shop-4-column.html"> Shop Now <i style={{color:"blue"}} className="ion-android-arrow-dropright-circle"></i></a>
    </div>
      </div>
}
export default AdvertCard;

