import React from 'react';
import ItemFlatCard from '../commons/cards/itemFlatCard';
import categoryProductsData from '../../datas/categoryProductsData';

const CategoryProducts = () =>{

   return <section className="category-product-area home-10">
    <div className="container">
      <div className="row">
         <div className="col-xs-12 col-md-12 col-lg-12 col-xl-9">
            <div className="row">
                  {categoryProductsData.map((item,index)=>{
                     return <div key={index} className="col-xs-12 col-md-12 col-lg-4">
                          <div className="section-title">
                            <h2>{item.title}</h2>
                           </div>
                           <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style">
                                
                                 {item.items.map((item,index)=>{
                                        return <div key={index} className="feature-slider-item">
                                                    {item.products.map((items,index)=>{
                                                      return <ItemFlatCard
                                                                  key={index}
                                                                  title={items.title}
                                                                  image1={items.image1}
                                                                  image2={items.image2}
                                                                  description={items.description}
                                                                  id={items.id}
                                                                  price={items.price}
                                                                  rating={items.rating}
                                                            />
                                                    })}
                                               </div>
                                 })}

                            </div>

                      </div>
                  })}
                    
             </div>
          </div>
         {/*advert section*/}
         <div class="col-xs-12 col-md-12 col-lg-12 d-lg-none d-xl-block col-xl-3 mtb-res-sm-30 mtb-res-md-30">
<div class="banner-inner">
<a href="shop-4-column.html"><img src="assets/images/banner-image/29.jpg" alt="" class="img-responsive" /></a>
</div>
</div>
         {/*adevert section end*/}

       </div>
     </div>
    </section>
}

export default CategoryProducts;