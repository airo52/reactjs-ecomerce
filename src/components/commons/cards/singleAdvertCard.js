import React from 'react';

const SingleAdvert = ({image})=>{
      return <div className="banner-area-2">
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <div className="banner-inner">
        <a href="shop-4-column.html">
           <img src={image} alt="" />
        </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      
}

export default SingleAdvert;