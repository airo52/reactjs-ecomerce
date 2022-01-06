import React from 'react';


const ItemFlatCard = ({title,image1,image2,description,id,price,rating})=>{
    return <article className="list-product">
    <div className="img-block">
    <a href="single-product.html" className="thumbnail">
    <img className="first-img" src={image1} alt="" />
    <img className="second-img" src={image2} alt="" />
    </a>
    <div className="quick-view">
    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
    <i className="ion-ios-search-strong"></i>
    </a>
    </div>
    </div>
    <div className="product-decs">
    <a className="inner-link" href="shop-4-column.html"><span>{title}</span></a>
    <h2><a href="single-product.html" className="product-link">{description}</a></h2>
    <div className="rating-product">
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    </div>
    <div className="pricing-meta">
    <ul>
    <li className="old-price not-cut">{price}</li>
    </ul>
    </div>
    </div>
    </article>
}

export default ItemFlatCard;