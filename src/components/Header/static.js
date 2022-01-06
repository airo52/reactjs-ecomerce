import React from 'react';
import StaticAsurance from '../asurance/asurance';
import fakeData from '../../datas/fakeData';

const Static = ()=>{
    const items =  fakeData.filter(item => item.category === "static");
    return <StaticAsurance item={items}/>
}

export default Static;