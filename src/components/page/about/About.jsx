import React, {useEffect, useState} from 'react';
import Aboutbutton from '../../button/Aboutbutton';

function About() {

    // About==========
    function aboutHeadSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-head-skeletne')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-head-skeletne')
        item.classList.add('abouthead')
        });
    }
    function aboutSubTitleSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-sub-head-skeletne')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-sub-head-skeletne')
        item.classList.add('second-head')
        });
    }
    function aboutParagraphSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-first-paragraph-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-first-paragraph-skeletone')
        item.classList.add('about-titles')
        });
    }
    function aboutParagraphFirstSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-title-paragraph-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-title-paragraph-skeletone')
        });
    }
    function aboutParagraphSecondSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-titles-paragraph-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-titles-paragraph-skeletone')
        });
    }
    function aboutDescriptionSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-description-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-description-skeletone')
        item.classList.add('about-descriptions')
        });
    }
    function aboutDescriptionTwoSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-description-first-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-description-first-skeletone')
        });
    }
    function aboutDescriptionThreeSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-description-second-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-description-second-skeletone')
        });
    }
    function aboutDescriptionFourSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-description-third-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-description-third-skeletone')
        });
    }
    function aboutButtonSkeletone(){
        const  allSkeleton = document.querySelectorAll('.about-btn-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('about-btn-skeletone')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            aboutHeadSkeletone();
            aboutSubTitleSkeletone();
            aboutParagraphSkeletone();
            aboutParagraphFirstSkeletone();
            aboutParagraphSecondSkeletone();
            aboutDescriptionSkeletone();
            aboutDescriptionTwoSkeletone();
            aboutDescriptionThreeSkeletone();
            aboutDescriptionFourSkeletone();
            aboutButtonSkeletone();
        }, 8000);
        return ()=> clearTimeout(timer);
    });
    // About Demo 
    function aboutDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-about-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-about-bg-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            aboutDemoBg()
        }, 10);
        return ()=> clearTimeout(timer);
    });

    // const [aboutAnimation,setAboutAnimation] = useState(false)
    // const Animation = () =>{
    //     if(window.scrollY >=151<1000){
    //         setAboutAnimation(true)
    //     }
    //     else
    //     {
    //         setAboutAnimation(false)
    //     }
    // }
    // window.addEventListener('scroll',Animation)

    return (
        <>
            <section className='mt-' id="about">
                <div className='container about_us_protocol'>
                    {/* <h4 className={aboutAnimation ? 'about-head about-head-skeletne ' : ''}> </h4> */}
                    <h4 className='about-head about-head-skeletne'> </h4>
                    <h4 className='about-subtitle about-sub-head-skeletne'> </h4>
                    <div className='row'>
                        <div className='col-9'>
                            <span className='about-title about-first-paragraph-skeletone' ></span>
                            <span className='about-title-paragraph-skeletone'></span>
                            <span className='about-titles-paragraph-skeletone'></span>
                            <p className='about-description about-description-skeletone'></p>
                            <span className='about-description-first-skeletone'></span>
                            <span className='about-description-second-skeletone'></span>
                            <span className='about-description-third-skeletone'></span>
                        </div>
                        <div className='col-3'>
                            <span className='about-btn-skeletone'><Aboutbutton /></span>
                        </div>
                    </div>
                    <img className='video__bg' src='../video/about-bg.png' alt='about-bg'></img>
                </div> 
                <img className='demo-about-bg' src='../demo-background/demo-about-bg.png' alt='demo-slider' />  
            </section>
        </>
    )
}

export default About;


