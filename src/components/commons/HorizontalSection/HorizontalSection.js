import React from 'react';
import ItemCard from '../cards/itemCard';
import NavTab from '../tabs/navTabs';

const HorizontalSection = ({title,textCapture,categories,data})=>{
    return (
    <section className="category-tab-area mt-60px">
      <div className="container">
         <div className="row">
           <div className="col-md-12">
       
              <div className="section-title">
                 <h2>{title}</h2>
                <p>{textCapture}</p>
              </div>

                {/* NavTabs start*/}
                <ul className="nav nav-tabs home-12">
                 {categories.map((item,index)=>{
                    return  <NavTab key={index} title={item.title} category={item.category} logo={item.logo} active={index < 1?"active":''} />
                 })}
                 </ul>
                 {/*NavTabEnd*/}

                 {/* <!-- Tab panes start -->*/}
                 <div className="tab-content">
                      {data.map((items,index)=>{
                          return <div key={index} id={items.category} className={index < 1?"tab-pane active":"tab-pane fade"}>
                                <div className="best-sell-slider owl-carousel owl-nav-style">
                                {items.itemChildrens.map((item,index)=>{
                                    return <ItemCard key={index} image1={item.image1}
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
                            </div>
                      })}
                   </div>
                 {/* <!-- Tab panes end -->*/}



    
            </div>
        </div>
     </div>
    </section>
    )
}

export default HorizontalSection;