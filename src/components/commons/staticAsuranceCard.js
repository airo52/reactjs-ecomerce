import React from 'react';

const StaticCard = ({image,title,description})=>{
     return <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
     <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
     <img src={image} alt="" className="img-responsive" />
     <div className="single-static-meta">
     <h4>{title}</h4>
     <p>{description}</p>
     </div>
     </div>
     </div>
}

export default StaticCard;