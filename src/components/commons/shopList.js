import React from 'react';

const ShopList = ({items})=>{
     
    return items.map((item,index)=><li key={index}><a href="#loadShopItems">{item.title}</a></li>);
}

export default ShopList;