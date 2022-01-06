import React from 'react';
import StaticCard from '../commons/staticAsuranceCard';
const StaticAsurance = ({item})=>{
       return (
        <section className="static-area mt-60px">
          <div className="container">
            <div className="static-area-wrap">
              <div className="row">
                   {item.map((item,index)=><StaticCard key={index} image={item.image} title={item.title} description={item.description}/>)}
              </div>
            </div>
         </div>
        </section>
       )
} 

export default StaticAsurance;