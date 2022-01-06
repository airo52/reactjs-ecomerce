import React from 'react';
import NewArrivalItems from './productItems';
import newArrivalsData from '../../datas/newArrivalsData';
import HotDealData from '../../datas/HotDealData';
import HotDeals from './hotDeals';

const NewArrivals = ()=>{
    return (
        <section className="hot-deal-area">
    <div className="container">
    <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mb-res-sx-30px">
    <div className="row">
    <div className="col-md-12">
    
    <div className="section-title ml-0px">
    <h2>New Arrivals</h2>
    <p>Weekly Arrivals</p>
    </div>
   
    </div>
    </div>
    {/*New arrivals start*/}
    <div className="new-product-slider owl-carousel owl-nav-style">
      {<NewArrivalItems items={newArrivalsData}/>}
    </div>
    </div>
     {/*New arrivals end*/}

   {/*Hot Deals Start*/}

   <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
    <div className="row">
    <div className="col-md-12">
    
    <div className="section-title">
    <h2>Hot Deals</h2>
    <p>Add hot products to weekly line up</p>
    </div>
   
    </div>
    </div>

    <div className="hot-deal owl-carousel owl-nav-style">

        {<HotDeals items={HotDealData}/>}
        </div>
     </div>   


   {/*Hot deals End*/}




    
    </div>
    </div>
    </section>
    )
}

export default NewArrivals;