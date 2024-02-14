import React, {useEffect} from 'react'
import Slider from '../slider/slider';
import CategoryCard from '../card/product-category-card/CategoryCard';
import ProductFeature from '../card/product-feature/ProductFeature';
import RecentProduct from '../card/recent-product/RecentProduct';
import BestSellingCard from '../card/best-selling-card/BestSellingCard';
import TrendingProducts from '../card/trending-product-card/TrendingProducts';
import DiscountProductCard from '../card/discount-product-card/DiscountProductCard';
import PopularCategoryCard from '../card/popular-category-card/PopularCategoryCard';
import PopularBrandCard from '../card/popular-brand-card/PopularBrandCard';



const Articale = () => {

    // Home-Page Main Slider
    function sliderSkeletone(){
        const  allSkeleton = document.querySelectorAll('.css-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('css-skeletone')
        });
    }
    function subSliderSkeletone(){
        const  allSkeleton = document.querySelectorAll('.css-sub-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('css-sub-skeletone')
        });
    }
    function sub2SliderSkeletone(){
        const  allSkeleton = document.querySelectorAll('.css-sub2-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('css-sub2-skeletone')
        });
    }
    // Slider Svg Display----------===========
    function leftSliderDisplay(){
        const  allSkeleton = document.querySelectorAll('.scroll-slide-mode-two')
        allSkeleton.forEach(item=>{
        item.classList.remove('image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function rightSliderDisplay(){
        const  allSkeleton = document.querySelectorAll('.scroll-slide-mode-one')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayOne(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayTwo(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-two')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayThree(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-three')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayFour(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-four')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayFive(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-five')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplaySix(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-six')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplaySeven(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-seven')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayEight(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-eight')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayNine(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-nine')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    function scrollSliderDisplayTen(){
        const  allSkeleton = document.querySelectorAll('.scroll-mode-svg-ten')
        allSkeleton.forEach(item=>{
        item.classList.remove('right-bottom-container-image-svg-mode')
        item.classList.add('scroll-slide-mode-off')
        });
    }
    // marque-skeletne
    function marqueSkeletone(){
        const allSkeleton = document.querySelectorAll('.marque-area-skeletone');
        allSkeleton.forEach(element => {
            element.classList.remove('marque-area-skeletone');
        });
    }
    // category-skeleton
    function categorySkeletone(){
        const  allSkeleton = document.querySelectorAll('.category-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('category-skeletone')
        item.classList.add('category-name')
        });
    }
    // category-image
    function categoryImage(){
        const  allSkeleton = document.querySelectorAll('.category-image')
        allSkeleton.forEach(item=>{
        item.classList.remove('category-image')
        item.classList.add('category-display-block')
        });
    }
    // category-name-skeleton
    function categoryNameSkeletone(){
        const  allSkeleton = document.querySelectorAll('.card-title-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('card-title-skeletone')
        });
    }
    // category-card-name
    function categoryCardTitle(){
        const  allSkeleton = document.querySelectorAll('.card-name-display')
        allSkeleton.forEach(item=>{
        item.classList.remove('card-name-display')
        item.classList.add('card-name-display-block')
        });
    }
    // category-view-icon-show
    function categoryViewIconShow(){
        const  allSkeleton = document.querySelectorAll('.view__btn__display')
        allSkeleton.forEach(item=>{
        item.classList.remove('view__btn__display')
        item.classList.add('view__btn__display__block')
        });
    }
    // doted-skeleton
    function dotedSkeletone(){
        const  allSkeleton = document.querySelectorAll('.doted-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('doted-skeletone')
        });
    }
    // rating-skeleton
    function ratingSkeletone(){
        const  allSkeleton = document.querySelectorAll('.rating-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('rating-skeletone')
        });
    }
    // rating-display
    function ratingDisplaySkeletone(){
        const  allSkeleton = document.querySelectorAll('.rating__display')
        allSkeleton.forEach(item=>{
        item.classList.remove('rating__display')
        item.classList.add('rating__display__block')
        });
    }
    // price-skeleton
    function priceSkeletone(){
        const  allSkeleton = document.querySelectorAll('.price-rate-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('price-rate-skeletone')
        });
    }
    // price-display
    function priceDisplaySkeletone(){
        const  allSkeleton = document.querySelectorAll('.price__display')
        allSkeleton.forEach(item=>{
        item.classList.remove('price__display')
        item.classList.add('price__display__block')
        });
    }
    // product-skeleton
    function productsSkeletone(){
        const  allSkeleton = document.querySelectorAll('.product-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('product-skeletone')
        item.classList.add('product-title')
        });
    }
    // product-image
    function prodcutImage(){
        const  allSkeleton = document.querySelectorAll('.product-image')
        allSkeleton.forEach(item=>{
        item.classList.remove('product-image')
        item.classList.add('product-display-block')
        });
    }
    // product-btn-icon-show
    function productBtnIconShow(){
        const  allSkeleton = document.querySelectorAll('.product__btn__display')
        allSkeleton.forEach(item=>{
        item.classList.remove('product__btn__display')
        item.classList.add('product__btn__display__block')
        });
    }
    // recent-skeleton
    function recentSkeletone(){
        const  allSkeleton = document.querySelectorAll('.recent-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('recent-skeletone')
        item.classList.add('recent-product')
        });
    }
    // recent-product-image
    function recnetProdcutImage(){
        const  allSkeleton = document.querySelectorAll('.recent-product-image')
        allSkeleton.forEach(item=>{
        item.classList.remove('recent-product-image')
        item.classList.add('recent-product-display-block')
        });
    }
    // recent-product-btn-icon-show
    function recentProductBtnIconShow(){
        const  allSkeleton = document.querySelectorAll('.recent__product__btn__display')
        allSkeleton.forEach(item=>{
        item.classList.remove('recent__product__btn__display')
        item.classList.add('recent__product__btn__display__block')
        });
    }
    // Best Selling Product
    function bestSellingTitle(){
        const  allSkeleton = document.querySelectorAll('.best__selling__title')
        allSkeleton.forEach(item=>{
        item.classList.add('best__selling__title__block')
        });
    }
    // Popular Category Skeletone
    function popularBestCategorySkeletone(){
        const  allSkeleton = document.querySelectorAll('.popular-category-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('popular-category-skeletone')
        item.classList.add('popular-category-name')
        });
    }
    // Popular Brand Name
    function popularBestBrandSkeletone(){
        const  allSkeleton = document.querySelectorAll('.popular-brand')
        allSkeleton.forEach(item=>{
        item.classList.add('popular-brand-name')
        });
    }
    // Popular Category And Brand
    function PopularCategorySkeletone(){
        const  allSkeleton = document.querySelectorAll('.popular-doted-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('popular-doted-skeletone')
        
        });
    }
    // popular-category-name-skeleton
    function PopularCategoryNameSkeletone(){
        const  allSkeleton = document.querySelectorAll('.popular-category-title-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('popular-category-title-skeletone')
        });
    }
    // popular-rating-skeleton
    function PopularRatingSkeletone(){
        const  allSkeleton = document.querySelectorAll('.popular-rating-skeletone')
            allSkeleton.forEach(item=>{
            item.classList.remove('popular-rating-skeletone')
        });
    }
    // popular-title-display
    function PopularDisplay(){
        const  allSkeleton = document.querySelectorAll('.popular-catg')
            allSkeleton.forEach(item=>{
            item.classList.remove('popular-title-display-off')
            item.classList.add('popular-title-display-block')
        });
    }
    // popular-svg-display
    function PopularSvgDisplay(){
        const  allSkeleton = document.querySelectorAll('.popular-svg-display')
            allSkeleton.forEach(item=>{
            item.classList.add('popular-svg-display-off')
        });
    }
    // Discount-Title-display
    function DiscountTitleDisplay(){
        const  allSkeleton = document.querySelectorAll('.discount__title')
            allSkeleton.forEach(item=>{
            item.classList.add('discount__title__display')
        });
    }
    // Trending Product-Title-display
    function TrendingProductTitleDisplay(){
        const  allSkeleton = document.querySelectorAll('.trending-title')
            allSkeleton.forEach(item=>{
            item.classList.add('trending__title__display')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            sliderSkeletone();
            subSliderSkeletone();
            sub2SliderSkeletone();
            leftSliderDisplay();
            rightSliderDisplay();
            scrollSliderDisplayOne();
            scrollSliderDisplayTwo();
            scrollSliderDisplayThree();
            scrollSliderDisplayFour();
            scrollSliderDisplayFive();
            scrollSliderDisplaySix();
            scrollSliderDisplaySeven();
            scrollSliderDisplayEight();
            scrollSliderDisplayNine();
            scrollSliderDisplayTen();
            categorySkeletone();
            categoryImage();
            categoryNameSkeletone();
            categoryCardTitle();
            categoryViewIconShow();
            dotedSkeletone();
            ratingSkeletone();
            ratingDisplaySkeletone();
            priceSkeletone();
            priceDisplaySkeletone();
            productsSkeletone()
            prodcutImage();
            productBtnIconShow();
            recentSkeletone();
            recnetProdcutImage();
            recentProductBtnIconShow();
            bestSellingTitle();
            popularBestCategorySkeletone()
            popularBestBrandSkeletone();
            PopularCategorySkeletone();
            PopularCategoryNameSkeletone();
            PopularRatingSkeletone();
            PopularDisplay();
            PopularSvgDisplay();
            DiscountTitleDisplay();
            TrendingProductTitleDisplay();
            marqueSkeletone();
        }, 7000);
        return ()=> clearTimeout(timer);
    });

    // DEMO-PART================================
    // Slider-Demo===========
    function sliderDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-slider')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-slider-off')
        });
    }
    // Slider-right-Demo===========
    function sliderRightDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-slider-right')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-slider-right-off')
        });
    }
    // Slider-right-bottom-Demo===========
    function sliderRightBottomDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-slider-right-bottom')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-slider-right-bottom-off')
        });
    } 
    // Category demo =============
    function categoryDemoBg(){
        const  allSkeleton = document.querySelectorAll('.mini__img')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-mini-box-off')
        });
    }
    function categoryDemoNextBg(){
        const  allSkeleton = document.querySelectorAll('.mini__img2')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-mini-box-lock')
        });
    }
    // Popular Category Demo
    function popularCategoryDemoBg(){
        const  allSkeleton = document.querySelectorAll('.popular__img')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-popular-bg-off')
        });
    }
    // Popular Category title Demo
    function popularCategoryTextDemoBg(){
        const  allSkeleton = document.querySelectorAll('.popular-show')
        allSkeleton.forEach(item=>{
        item.classList.remove('demo-popular-text-off')
        });
    }
    // Popular Category rating Demo
    function popularCategoryRatingDemoBg(){
        const  allSkeleton = document.querySelectorAll('.popular__demo__bg__text')
        allSkeleton.forEach(item=>{
        item.classList.add('popular__demo__bg__text__off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            sliderDemoBg();
            sliderRightDemoBg();
            sliderRightBottomDemoBg(); 
            categoryDemoBg();
            categoryDemoNextBg();
            popularCategoryDemoBg();
            popularCategoryTextDemoBg();
            popularCategoryRatingDemoBg();
        }, 10);
        return ()=> clearTimeout(timer);
    });

    const ContractSubtitle={
        fontSize:12,
        paddingLeft:5,
        fontWeight:700,
    }
    return (
        <>
            <div className='mt-3 pt-3'>
                <section className='mt-5' id="home">
                    <Slider/>
                </section>
                <section id="products">
                    <CategoryCard />
                    <ProductFeature />
                    <RecentProduct />
                </section>
                <section id='bestSelling'>
                    <BestSellingCard />
                </section>
                <section id='discountProducts'>
                    <DiscountProductCard />
                </section>
                <section id='trendingProducts'>
                    <TrendingProducts />
                </section>
                <section id='popular'>
                    <PopularCategoryCard />
                    <PopularBrandCard />
                </section>
            </div>
        </>
    )
}

export default Articale;
