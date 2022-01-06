import React from 'react';

const ItemCard = ({image1,image2,title,description,oldPrice=0,currentPrice,discount,rating,status=false})=>{
    return (
    <article className="list-product">
    <div className="img-block">
    <a href="single-product.html" className="thumbnail">
    <img className="first-img" src={image1} alt="" />
    <img className="second-img" src={image2} alt="" />
    </a>
    <div className="quick-view">
    <a className="quick_view" href="#none" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
    <i className="ion-ios-search-strong"></i>
    </a>
    </div>
    </div>
    <ul className="product-flag">
        {status && <li className='new'>New</li>}
    
    </ul>
    <div className="product-decs">
    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
    <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quilted Ter..</a></h2>
    <div className="rating-product">
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    <i className="ion-android-star"></i>
    </div>
    <div className="pricing-meta">
    <ul>
    <li className="old-price">€18.90</li>
    <li className="current-price">€34.21</li>
    <li className="discount-price">-5%</li>
    </ul>
    </div>
    </div>
    <div className="add-to-link">
    <ul>
    <li className="cart"><a className="cart-btn" href="#handleCart">ADD TO CART </a></li>
    <li>
    <a href="#wishlistl"><i className="ion-android-favorite-outline"></i></a>
    </li>
    <li>
    <a href="#compare"><i className="ion-ios-shuffle-strong"></i></a>
    </li>
    </ul>
    </div>
    </article>
    )
}

export default ItemCard;