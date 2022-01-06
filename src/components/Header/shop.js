import React from 'react';
import ShopList from '../commons/shopList';

const Shop = ({items})=>{
    return (
        items.map((item,index)=>{
         return   <li key={index}>
               <ul>
               <li  className="mega-menu-title"><a href="#goGeneralShop">{item.Title}</a></li>
                { <ShopList items={item.shops}/>}
               </ul>
            </li>
        })
    )
}

const MobileShop = ({items})=>{
    return (
        items.map((item,index)=>{
         return   <li key={index}>
                  <li><a href="#goGeneralShop">{item.Title}</a></li>
               <ul>
              
                {<ShopList key={index+"list"} items={item.shops}/>}
               </ul>
            </li>
        })
    )
}

export  {Shop,MobileShop};

