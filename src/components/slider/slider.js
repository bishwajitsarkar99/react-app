import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import CowSliderData from '../slider/CowSliderData';
import { Fade,Zoom,Slide } from 'react-slideshow-image';
import LeftSliderSvg from '../svg/LeftSliderSvg';
import RightSliderSvg from '../svg/RightSliderSvg';
import ScrollSliderSvg from '../svg/ScrollSliderSvg';
import MarqueText from './marque-text/MarqueText';

const Slider = () => {

    const [typeEffect] = useTypewriter({
        words: ['Animal care','Animal Treatment','Animal Medicine','Animal Farm Counseling','Affection and love in animal'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 30,
        pauseFor:2500,
        deleteChars:10
    },[5000])
    const image={
        height:425,
    }
    const medicineSlideImage={
        height:197,
        width:390
    }
    const font={
        fontSize:16,
        color:'purple',
    }
    const sliderSkeletone={
        width:1200,
        height:425,
        lineHeight:1200
    }
    return (
    
        <>
            <div className='med-home-banner'>
                <div className='med-container'>
                    <div className='med-section__left'>
                        <div className='med-carousel'>
                            <div className='slider__list'>
                                <div className='slider__container__left'>
                                    <div id="carouselExampleCaptions" class="carousel slide mt-4" data-bs-ride="carousel">
                                        <div class="carousel-indicators slider__tab">
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="../slider-image/main-doctor-slider.png" className="slider1 d-block w-100" style={image} alt="medicine" />
                                                <div className="carousel-caption d-md-block slider__label">
                                                    <h6 >
                                                        <span className='text__shadow'> GST Medicine Center</span> 
                                                        <span style={font}> {typeEffect} </span>
                                                        <span className='cursor'>
                                                            <Cursor />
                                                        </span>
                                                    </h6>
                                                    <span className='social__group'>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_facebook.png' className="social__media" alt="facebook"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_linkedin.png' className="social__media" alt="linkedin"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_messanger.png' className="social__media" alt="messanger"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_twiter.png' className="social__media" alt="twiter"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_whatsapp.png' className="social__media" alt="whatsapp"/></a>
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="carousel-item">
                                                <img src="../slider-image/cow_imag_bright.png" className="slider2 d-block w-100" style={image} alt="cow" />
                                                <div className="carousel-caption d-md-block slider__label">
                                                    <h6 >
                                                        <span className='text__shadow'> GST Medicine Center</span>  
                                                        <span style={font}> {typeEffect} </span>
                                                        <span className='cursor'>
                                                            <Cursor />
                                                        </span>
                                                    </h6>
                                                    <span className='social__group'>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_facebook.png' className="social__media" alt="facebook"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_linkedin.png' className="social__media" alt="linkedin"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_messanger.png' className="social__media" alt="messanger"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_twiter.png' className="social__media" alt="twiter"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_whatsapp.png' className="social__media" alt="whatsapp"/></a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="../slider-image/cow_image2_bright.png" className="slider3 d-block w-100" style={image}alt="cow2" />
                                                <div className="carousel-caption d-md-block slider__label">
                                                    <h6 >
                                                        <span className='text__shadow'> GST Medicine Center</span> 
                                                        <span style={font}> {typeEffect} </span>
                                                        <span className='cursor'>
                                                            <Cursor />
                                                        </span>
                                                    </h6>
                                                    <span className='social__group'>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_facebook.png' className="social__media" alt="facebook"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_linkedin.png' className="social__media" alt="linkedin"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_messanger.png' className="social__media" alt="messanger"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_twiter.png' className="social__media" alt="twiter"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_whatsapp.png' className="social__media" alt="whatsapp"/></a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="../slider-image/pet_animal_bright.png" className="slider4 d-block w-100" style={image} alt="cow3" />
                                                <div className="carousel-caption d-md-block slider__label">
                                                    <h6 >
                                                        <span className='text__shadow'> GST Medicine Center</span> 
                                                        <span style={font}> {typeEffect} </span>
                                                        <span className='cursor'>
                                                            <Cursor />
                                                        </span>
                                                    </h6>
                                                    <span className='social__group'>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_facebook.png' className="social__media" alt="facebook"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_linkedin.png' className="social__media" alt="linkedin"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_messanger.png' className="social__media" alt="messanger"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_twiter.png' className="social__media" alt="twiter"/></a>
                                                        <a className='over__lay' href='#'><img src='../slider-image/app_whatsapp.png' className="social__media" alt="whatsapp"/></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <span className='css-skeletone' style={sliderSkeletone}>
                                        <LeftSliderSvg />   
                                        <img className='demo-slider' src='../demo-background/demo-slide.png' alt='demo-slider'></img>                                   
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider__container__right'>
                        <div className='slider-collection '>
                            <div className='sub__slider '>
                                <div id="carouselMedicineCaptions" class="carousel slide carouselMedicine" data-bs-ride="carousel">
                                    <div class="carousel-indicators slider__tab me-2">
                                        <button type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide-to="1" aria-label="Medicine 2"></button>
                                        <button type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide-to="2" aria-label="Medicine 3"></button>
                                        <button type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide-to="3" aria-label="Medicine 4"></button>
                                        <button type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide-to="4" aria-label="Medicine 5"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="../medicine-slider-image/medicine-01.png" className="medicine1 d-block w-100" style={medicineSlideImage} alt="medicine01" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../medicine-slider-image/medicine-02.png" className="medicine2 d-block w-100" style={medicineSlideImage} alt="medicine02" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../medicine-slider-image/medicine-03.png" className="medicine3 d-block w-100" style={medicineSlideImage}alt="medicine03" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../medicine-slider-image/medicine-4.png" className="medicine4 d-block w-100" style={medicineSlideImage} alt="medicine4" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../medicine-slider-image/medicine-05.png" className="medicine5 d-block w-100" style={medicineSlideImage} alt="medicine05" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselMedicineCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <span className='css-sub-skeletone'>
                                    <RightSliderSvg />
                                    <img className='demo-slider-right' src='../demo-background/mini-slider-demo.png' alt='demo-slider'></img>
                                </span>
                            </div>
                        </div>
                        <div className='slider-collection '>
                            <div className='sub__slider'>
                                <div className='cow-slider-container'>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-01.png' alt='cow01'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-two'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-02.png' alt='cow02'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-three'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-03.png' alt='cow03'></img>   
                                        </span>    
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-four'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-04.png' alt='cow04'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-five'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-05.png' alt='cow05'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-six'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-01.png' alt='cow01'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-seven'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-02.png' alt='cow02'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-eight'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-03.png' alt='cow03'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-nine'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-04.png' alt='cow04'></img>
                                        </span>
                                    </div>
                                    <div className='slide-image css-sub2-skeletone'>
                                        <span>
                                            <span className='right-bottom-container-image-svg-mode scroll-mode-svg-ten'>
                                                <ScrollSliderSvg />
                                                <img className='demo-slider-right-bottom' src='../demo-background/slider-right-bottom.png' alt='demo-slider'></img>
                                            </span>
                                            <img className='cow-image' src='../cow-slider-image/healthy-cow-05.png' alt='cow05'></img>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MarqueText />
            </div>
        </>

    
    )
}

export default Slider;
