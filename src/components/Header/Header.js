import React from 'react';
import fakeData from '../../datas/fakeData';
import shopData from '../../datas/shopData';
import Options from '../commons/selectOptions';

import {Shop,MobileShop} from './shop';

const Header =()=>{

     const Opt =  fakeData.filter(item => item.category === "option");
     const shop = shopData;
    return(
        
     
      <header className="main-header home-10">
      {/* Header Buttom Start */}
      <div className="header-navigation d-lg-block d-none">
        <div className="container">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-electronic-2.jpg" alt="" /></a>
              </div>
            </div>
            {/* Logo End */}
            <div className="col-md-10 col-sm-10">
              {/*Header Bottom Account Start */}
              <div className="header_account_area home-6">
                {/*Seach Area Start */}
                <div className="header_account_list search_list">
                  <a href="#none"><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          {<Options option={Opt}/>}
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Cart info Start */}
                <div className="cart-info-wrap">
                  <div className="cart-info d-flex home-9">
                    <a href="#compare" className="count-cart random d-xs-none" ><i></i></a>
                    <a href="#wish" className="count-cart heart"><i></i></a>
                    <div className="mini-cart-warp">
                      <a href="#none" className="count-cart"><span>$20.00</span></a>
                      <div className="mini-cart-content">
                        <ul>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="#none"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="#none">Juicy Couture...</a></h4>
                              <span>$9.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#none"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="#none"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="#none">Water and Wind...</a></h4>
                              <span>$11.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#none"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-total">
                          <h4>Subtotal : <span>$20.00</span></h4>
                          <h4>Shipping : <span>$7.00</span></h4>
                          <h4>Taxes : <span>$0.00</span></h4>
                          <h4 className="shop-total">Total : <span>$27.00</span></h4>
                        </div>
                        <div className="shopping-cart-btn text-center">
                          <a className="default-btn" href="checkout.html">checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Cart info End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Menu Content Start */}
      <div className="header-buttom-nav sticky-nav">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="d-flex align-items-start justify-content-start">
                {/*Main Navigation Start */}
                <div className="main-navigation d-none d-lg-block">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#none">Home <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#none">Home Organic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index.html">Organic 1</a></li>
                            <li><a href="index-2.html">Organic 2</a></li>
                            <li><a href="index-3.html">Organic 3</a></li>
                            <li><a href="index-4.html">Organic 4</a></li>
                          </ul>
                        </li>
                     
                       
                      
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#none">Shop <i className="ion-ios-arrow-down" /></a>
                      <ul className="mega-menu-wrap">
                              {<Shop items={shop}/>}
                        <li className="w-100">
                          <ul className="banner-megamenu-wrapper d-flex">
                            <li className="banner-wrapper mr-30px">
                              <a href="#none"><img src="assets/images/banner-image/banner-menu-3.jpg" alt="" /></a>
                            </li>
                            <li className="banner-wrapper">
                              <a href="#none"><img src="assets/images/banner-image/banner-menu-4.jpg" alt="" /></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
                {/*Main Navigation End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Content End */}
      {/* Header Buttom Start */}
      <div className="header-navigation sticky-nav d-lg-none">
        <div className="container position-relative">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-electronic-2.jpg" alt="" /></a>
              </div>
            </div>
            {/* Logo End */}
            {/* Navigation Start */}
            <div className="col-md-10 col-sm-10">
              {/*Header Bottom Account Start */}
              <div className="header_account_area">
                {/*Seach Area Start */}
                <div className="header_account_list search_list">
                  <a href="#none"><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          {<Options option={Opt}/>}
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Cart info Start */}
                <div className="cart-info home-9 d-flex">
                  <a href="#none" className="count-cart random d-xs-none"><i></i></a>
                  <a href="#none" className="count-cart heart d-xs-none" ><i></i></a>
                  <div className="mini-cart-warp">
                    <a href="#none" className="count-cart"><span>$20.00</span></a>
                    <div className="mini-cart-content">
                      <ul>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="#none"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="#none">Juicy Couture...</a></h4>
                            <span>$9.00</span>
                            <div className="shopping-cart-delete">
                              <a href="#none"><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="#none"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="#none">Water and Wind...</a></h4>
                            <span>$11.00</span>
                            <div className="shopping-cart-delete">
                              <a href="#none"><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-total">
                        <h4>Subtotal : <span>$20.00</span></h4>
                        <h4>Shipping : <span>$7.00</span></h4>
                        <h4>Taxes : <span>$0.00</span></h4>
                        <h4 className="shop-total">Total : <span>$27.00</span></h4>
                      </div>
                      <div className="shopping-cart-btn text-center">
                        <a className="default-btn" href="checkout.html">checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Cart info End */}
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <div className="mobile-menu-area">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul className="menu-overflow">
                  <li>
                    <a href="index.html">HOME</a>
                    <ul>
                      <li>
                        <a href="#none">Home Organic</a>
                        <ul>
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                     
                    
                     
                    
                    </ul>
                  </li>
                  <li>
                    <a href="#none">Shop</a>
                    <ul>
                       {<MobileShop items={shop}/>}
                    </ul>
                  </li>
                
          
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
          {/* mobile menu end*/}
        </div>
      </div>
    
      {/*Header Bottom Account End */}
    </header>
    
    )
}

export default Header;