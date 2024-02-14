import React, {useEffect} from 'react'
import Data from './data';
import AnotherData from './anotherData';
import AlsoData from './alsoData';
import TestimonialSvg from '../../svg/TestimonialSvg';

function Testimonial() {

    // Testimonial ================
    function testimonialHeadSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-head-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-head-skeletone')
        });
    }
    function testimonialHeadDisplay(){
        const  allSkeleton = document.querySelectorAll('.test__display')
        allSkeleton.forEach(item=>{
        item.classList.add('testimonial__display')
        });
    }
    function testimonialImagSkeletone(){
        const  allSkeleton = document.querySelectorAll('.image-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('image-skeletone')
        });
    }
    function testimonialHedingSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-heading-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-heading-skeletone')
        });
    }
    function testimonialDesignationSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-sub-heading-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-sub-heading-skeletone')
        });
    }
    function testimonialDescriptionSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-description-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-description-skeletone')
        });
    }
    function testimonialParagraphSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-paragrahp-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-paragrahp-skeletone')
        });
    }
    function testimonialBottomLineSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-bottom-line-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-bottom-line-skeletone')
        });
    }
    function testimonialMiniSvg(){
        const  allSkeleton = document.querySelectorAll('.mini-svg-display')
        allSkeleton.forEach(item=>{
        item.classList.add('svg-mini-display-555')
        });
    }
    function testimonialButtonSkeletone(){
        const  allSkeleton = document.querySelectorAll('.testimonial-btn-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('testimonial-btn-skeletone')
        item.classList.add('add__btn__text')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            testimonialHeadSkeletone();
            testimonialHeadDisplay();
            testimonialImagSkeletone();
            testimonialHedingSkeletone();
            testimonialDesignationSkeletone();
            testimonialDescriptionSkeletone();
            testimonialParagraphSkeletone();
            testimonialBottomLineSkeletone();
            testimonialMiniSvg();
            testimonialButtonSkeletone();
        }, 8000);
        return ()=> clearTimeout(timer);
    });

    // Testimonial Demo
    function testimonialDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-testimonial-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-testimonial-bg-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            testimonialDemoBg()
        }, 10);
        return ()=> clearTimeout(timer);
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>

            <section id="testimonial">
                <span className='testimonial-head-skeletone'></span>
                <span className='side__text test__display'> </span>
                <div className="container">
                    <div className='row'>
                        <div id="carouselExampleIndicators" class="carousel slide testimonial__serial" data-bs-ride="carousel" style={settings}>
                            <div class="carousel-indicators">
                                <button id='testimonialBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button id='testimonialBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button id='testimonialBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='testimonial__card card-padding'>
                                        {Data.map((d)=>(
                                            <div className="card testimonial__body">
                                                <div className='image__box'>
                                                    <img src={d.image} className="image__part" alt="testimonial-image" />
                                                    <span className='image-skeletone'></span>
                                                </div>
                                                <span className='mini-svg-display'> <TestimonialSvg /> </span>
                                                <div class="card-body">
                                                    <p className="card-title head__font testimonial-heading-skeletone">{d.name}</p>
                                                    <p className="para__font testimonial-sub-heading-skeletone">{d.designation}</p>
                                                    <p className="review__font">{d.review}</p>
                                                    <span className='testimonial-description-skeletone'></span>
                                                    <span className='testimonial-paragrahp-skeletone'></span>
                                                    <span className='testimonial-bottom-line-skeletone'></span>
                                                    <a href="#" className="btn btn-sm bg-indigo-500 read__btn">
                                                        <span className='testimonial-btn-skeletone add__btn__text'> </span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='testimonial__card card-padding'>
                                        {AnotherData.map((d)=>(
                                            <div className="card testimonial__body2">
                                                <div className='image__box'>
                                                    <img src={d.image} className="image__part" alt="testimonial-image" />
                                                    <span className='image-skeletone'></span>
                                                </div>
                                                <span className='mini-svg-display'> <TestimonialSvg /> </span>
                                                <div class="card-body">
                                                    <p className="card-title head__font testimonial-heading-skeletone">{d.name}</p>
                                                    <p className="para__font testimonial-sub-heading-skeletone">{d.designation}</p>
                                                    <p className="review__font">{d.review}</p>
                                                    <span className='testimonial-description-skeletone'></span>
                                                    <span className='testimonial-paragrahp-skeletone'></span>
                                                    <span className='testimonial-bottom-line-skeletone'></span>
                                                    <a href="#" className="btn btn-sm bg-indigo-500 read__btn"> 
                                                        <span className='testimonial-btn-skeletone add__btn__text'></span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='testimonial__card card-padding'>
                                        {AlsoData.map((d)=>(
                                            <div className="card testimonial__body3">
                                                <div className='image__box'>
                                                    <img src={d.image} className="image__part" alt="testimonial-image" />
                                                    <span className='image-skeletone'></span>
                                                </div>
                                                <span className='mini-svg-display'> <TestimonialSvg /> </span>
                                                <div class="card-body">
                                                    <p className="card-title head__font testimonial-heading-skeletone">{d.name}</p>
                                                    <p className="para__font testimonial-sub-heading-skeletone">{d.designation}</p>
                                                    <p className="review__font">{d.review}</p>
                                                    <span className='testimonial-description-skeletone'></span>
                                                    <span className='testimonial-paragrahp-skeletone'></span>
                                                    <span className='testimonial-bottom-line-skeletone'></span>
                                                    <a href="#" className="btn btn-sm bg-indigo-500 read__btn">
                                                        <span className='testimonial-btn-skeletone add__btn__text'></span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>

                        </div>
                    </div>
                    <img className='demo-testimonial-bg' src='../demo-background/demo-testimonial-bg.png' alt='demo-slider' />  
                </div>
            </section>

        </>
    )
}

export default Testimonial;
