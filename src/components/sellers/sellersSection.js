import React from 'react';

import sellerSectionData from '../../datas/sellerSectionData';
import HorizontalSection from '../commons/HorizontalSection/HorizontalSection';

const SellersSection =()=>{
           return (
               sellerSectionData.map((item,index)=> <HorizontalSection
                 key={index}
                title={item.title} 
                textCapture={item.textCapture}
                categories={item.categories}
                data={item.data}
                />)
           )
}

export default SellersSection;