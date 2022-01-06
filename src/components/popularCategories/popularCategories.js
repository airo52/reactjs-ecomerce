import React from 'react';
import PopularCategoryCard from '../commons/cards/popularCategoryCard';
import popularCategoriesData from '../../datas/popularCategoriesData';

const PopularCategories=()=>{
    const PopularCategory = popularCategoriesData;

       return (
        <section className="categorie-area mb-60px mt-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
       
               <div className="section-title">
                 <h2>Popular Categories</h2>
                <p>HIGH SALES</p>
               </div>
       
            </div>
           </div>
       
                <div className="category-slider owl-carousel owl-nav-style">

                  {
                     PopularCategory.map((item,index)=>{
                       return <div key={index} className="category-item">
                                    {item.items.map((items,index)=>{
                                         return <PopularCategoryCard key={index} mb={index === 0?'mb-30px':''} image={items.image} title={items.title} products={items.products}/>
                                    })}
                              </div>
                     })
                  }
               </div>

        </div>
    </section>
       )
}

export default PopularCategories;