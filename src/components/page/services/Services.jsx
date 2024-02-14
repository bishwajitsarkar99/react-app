import React from 'react'
import ServicesSlider from './ServicesSlider';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import ServiceSvg from '../../svg/ServiceSvg';

function Services() {

    // Service============
    function serviceHead(){
        const allSkeletone = document.querySelectorAll('.service-head-skeletone')
        allSkeletone.forEach(item=>{
            item.classList.remove('service-head-skeletone')
            item.classList.add('service-head')
        });
    }
    // Service Sub-Title
    function serviceHeadTitle(){
        const allSkeletone = document.querySelectorAll('.serv__subTitle')
        allSkeletone.forEach(item => {
            item.classList.add('service-head-title')
        });
    }
    // Service Title
    function serviceTitle(){
        const allSkeletone = document.querySelectorAll('.service-title-skeletone')
        allSkeletone.forEach(item => {
            item.classList.remove('service-title-skeletone')
            item.classList.add('service-title')
        });
    }
    function serviceSubTitle(){
        const  allSkeleton = document.querySelectorAll('.service-sub-title-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('service-sub-title-skeletone')
        });
    }
    // Progress bar skeletone
    function serviceProgressBar(){
        const  allSkeleton = document.querySelectorAll('.progress-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('progress-skeletone')
        });
    }
    // Service Image Skeletone
    function serviceImageBackground(){
        const  allSkeleton = document.querySelectorAll('.service-image-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('service-image-skeletone')
        });
    }
    // Service Image Title skeletone
    function serviceSvgImageTitle(){
        const  allSkeleton = document.querySelectorAll('.service__title__text__skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('service__title__text__skeletone')
        });
    }
    // Service Svg Image Skeletone
    function serviceSvgImage(){
        const  allSkeleton = document.querySelectorAll('.serv-svg')
        allSkeleton.forEach(item=>{
        item.classList.add('serv-svg-off')
        });
    }
    setTimeout(() => {
        serviceHead();
        serviceHeadTitle();
        serviceTitle();
        serviceSubTitle();
        serviceProgressBar();
        serviceImageBackground();
        serviceSvgImageTitle();
        serviceSvgImage();
    }, 8000);

    // Service Demo
    function serviceDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-service-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-service-bg-off')
        });
    }
    setTimeout(() => {
        serviceDemoBg();
    }, 10);

    const ContractSubtitle={
        fontSize:12,
        paddingLeft:5,
        fontWeight:700,
    }
    const [typeEffect] = useTypewriter({
        words:['1.Patient Counselling','2.Patinet Treatment','3.Medicine Provide','4.Dariry Farm Product'],
        loop:{},
        typeSpeed:200,
        delaySpeed:40
    })
    const fontStyle={
        fontSize:'18px'
    }
    
    const councingProgressBar ={
        width:'75%',
        textAlign:'left',
        paddingLeft:'20px',
        fontSize:'12px',
        letterSpacing:'1px',
        lineHeight:'.1'
    }
    const tretmentProgressBar ={
        width:'85%',
        textAlign:'left',
        paddingLeft:'20px',
        fontSize:'12px',
        letterSpacing:'1px',
        lineHeight:'.1'
    }
    const medicineProgressBar ={
        width:'100%',
        textAlign:'left',
        paddingLeft:'20px',
        fontSize:'12px',
        letterSpacing:'1px',
        lineHeight:'.1'
    }
    const farmingProgressBar ={
        width:'65%',
        textAlign:'left',
        paddingLeft:'20px',
        fontSize:'12px',
        letterSpacing:'1px',
        lineHeight:'.1'
    }
    return (
        <>
            <section id="services">
                <div className='row service__top'>
                    <h1 className='contract__head side__text'>
                        <span className='service-head-skeletone'></span>
                        <span className='serv__subTitle' style={ContractSubtitle}></span>
                    </h1>
                </div>
                <div className='row service__card__bundel'>
                    <div className='col-6 services-card'>
                        <span className='ms-3 services__subtitle service-title-skeletone'></span>
                        <span className='service-sub-title-skeletone' style={fontStyle}> {typeEffect} </span>
                        <span className='cursor'>
                            <Cursor />
                        </span>
                        <div className='card-body flipInX'>
                            <div className='progress'>
                                <div id='loader' className='progress-bar progress-bar-striped progress-bar-animated bg-primary progress-skeletone'
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={councingProgressBar}>
                                    Patient Counselling
                                </div>
                            </div>
                            <div className='progress mt-3'>
                                <div id='loader' className='progress-bar progress-bar-striped progress-bar-animated bg-primary progress-skeletone'
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={tretmentProgressBar}>
                                    Patient Treatment
                                </div>
                            </div>
                            <div className='progress mt-3'>
                                <div id='loader' className='progress-bar progress-bar-striped progress-bar-animated bg-primary progress-skeletone'
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={medicineProgressBar}>
                                    Medicine Provide
                                </div>
                            </div>
                            <div className='progress mt-3'>
                                <div id='loader' className='progress-bar progress-bar-striped progress-bar-animated bg-primary progress-skeletone'
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={farmingProgressBar}>
                                    Dariry Farm Product
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 card services-card'>
                        <ServicesSlider />
                        <span className='serv-svg'> <ServiceSvg /></span>
                    </div>
                </div>
                <img className='demo-service-bg' src='../demo-background/demo-service-bg.png' alt='demo-slider' />   
            </section>

        </>
    )
}

export default Services;
