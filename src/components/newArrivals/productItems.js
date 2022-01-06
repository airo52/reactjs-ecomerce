import React from 'react';
import ItemCard from '../commons/cards/itemCard';


const NewArrivalItems = ({items})=>{
  

    return items.map((item,index)=>{
      return  <div key={index} className="product-inner-item">
          { item.item.map((item,index)=>{
                return <ItemCard key={index}
                       image1={item.image1}
                       image2={item.image2}
                       title={item.title}
                       description={item.description}
                       oldPrice={item.oldPrice}
                       currentPrice={item.currentPrice}
                       discount={item.discount}
                       rating={item.rating}
                       status={item.status}
                />

                
           })}
           </div>

    })

}

export default NewArrivalItems;