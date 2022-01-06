import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './App.css';
import Header from './components/Header/Header';


import HeadSlider from './components/Header/Slider';
import Static from './components/Header/static';
import Advert from './components/Advert/advert';
import SellersSection from './components/sellers/sellersSection';
import PopularCategories from './components/popularCategories/popularCategories';
import NewArrivals from './components/newArrivals/newArrivals';
import SingleAdvert from './components/commons/cards/singleAdvertCard';
import CategoryProducts from './components/categoryProducts/categoryProducts';
import Footer from './components/commons/Footer/footer';


function App() {
  return (
    <>
      <Header/>
       <HeadSlider/> 
       <Static/>
       <Advert/>
       <SellersSection/>
       <PopularCategories/>
       <NewArrivals/>
        <SingleAdvert image={"assets/images/banner-image/28.jpg"}/> 
        <CategoryProducts/>

        <Footer/>
      

    </>
  );
}

export default App;
