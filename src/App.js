import './main-asset/css/main/App.css';
import './component-module-css/footerStyle.css';
import './component-module-css/contractStyle.css';
import './component-module-css/sliderStyle.css';
import './component-module-css/aboutStyle.css';
import './component-module-css/servicesStyle.css';
import './component-module-css/faqStyle.css';
import './component-module-css/testimonialStyle.css';
import './component-module-css/blogStyle.css';
import './component-module-css/categoryStyle.css';
import './component-module-css/imageButtonStyle.css';
import './component-module-css/bestSellingStyle.css';
import './component-module-css/TrendingProductStyle.css';
import './component-module-css/discountProductSyle.css';
import './component-module-css/popularStyle.css';
import './component-module-css/videoBlogStyle.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer.js';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  // UpArrow Button show when any page scroll ----------
  const[upButton, setUpButton] = useState(false);
  const upArrow = () =>{
    if(window.scrollY >=151){
      setUpButton(true);
    }
    else{
      setUpButton(false);
    }
  };

  window.addEventListener('scroll', upArrow);

  return (
    <>
      <div className='fixed-box' id='fixed-offer'>
        <a className='' href='#'>
          <img className='offer-logo' src='../logo/todays.png' alt='offer-logo' />
        </a>
      </div>
      <div className="App">
        <Header/>
      </div>
      <div className=''>
        <Outlet />
      </div>
      <div className="" >
        <Footer />
      </div>
      <div className={upButton ? 'up--arrow--btn--display' : 'up--arrow--btn--display--none'}>
        <div className='clasic--uparrow'>
          <a href='#' className='uparrow--btn'><i class="fa-solid fa-arrow-up btn--icon"></i></a>
        </div>
      </div>
      
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
