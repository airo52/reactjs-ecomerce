import React from 'react';

const PopularCategoryCard = ({image,title,products,mb})=>{
     return <div className={'category-list '+mb}>
     <div className="category-thumb">
     <a href="shop-4-column.html">
     <img src={image} alt="" />
     </a>
     </div>
     <div className="desc-listcategoreis">
     <div className="name_categories">
     <h4>{title}</h4>
     </div>
     <span className="number_product">{products}</span>
     <a href="#ShopNow"> Shop Now <i className="ion-android-arrow-dropright-circle"></i></a>
     </div>
     </div>
}

export default PopularCategoryCard;