import React,{useEffect} from 'react'
import FaqSvg from '../../svg/FaqSvg';

function FaqCard() {
    // FAQ- Skeletone
    function faqHeadSkeletone(){
        const  allSkeleton = document.querySelectorAll('.faq-head-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-head-skeletone')
        item.classList.add('faq__title__display')
        });
    }
    // FAQ-Head Skeletone
    function faqSubHeadSkeletone(){
        const  allSkeleton = document.querySelectorAll('.faq__sub__head__title__skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq__sub__head__title__skeletone')
        item.classList.add('blog__title__display')
        });
    }
    // FAQ-Object skeletone
    function faqSubHeadDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq__object')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq__display__off')
        item.classList.add('faq__display__on')
        });
    }
    // FAQ- Image Skeletone
    function faqImageSkeletone(){
        const  allSkeleton = document.querySelectorAll('.faq-image-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-image-skeletone')
        });
    }
    // FAQ- Svg Image Skeletone
    function faqImageSvg(){
        const  allSkeleton = document.querySelectorAll('.faq__svg__image')
        allSkeleton.forEach(item=>{
        item.classList.add('faq__svg__display')
        });
    }
    // FAQ- Content Skeletone
    function faqContent(){
        const  allSkeleton = document.querySelectorAll('.faq-content-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-skeletone')
        item.classList.add('faq-content')
        });
    }
    // FAQ- Content-Two Skeletone
    function faqContentTwo(){
        const  allSkeleton = document.querySelectorAll('.content-two')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-two')
        });
    }
    // FAQ- Content-Three Skeletone
    function faqContentThree(){
        const  allSkeleton = document.querySelectorAll('.content-three')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-three')
        });
    }
    // FAQ- Content-Four Skeletone
    function faqContentFour(){
        const  allSkeleton = document.querySelectorAll('.content-four')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-four')
        });
    }
    // FAQ- Content-Five Skeletone
    function faqContentFive(){
        const  allSkeleton = document.querySelectorAll('.content-five')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-five')
        });
    }
    // FAQ- Content-Six Skeletone
    function faqContentSix(){
        const  allSkeleton = document.querySelectorAll('.content-six')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-six')
        });
    }
    // FAQ- Question-Answer Skeletone
    function faqContentAnswer(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone')
        item.classList.add('faq-content-answer')
        });
    }
    function faqContentAnswerChildren(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children')
        });
    }
    function faqContentAnswerTwo(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-two')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-two')
        });
    }
    function faqContentAnswerTwoDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq-answer-two')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-answer-two')
        });
    }
    function faqContentAnswerChildrenTwo(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children-two')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children-two')
        });
    }
    function faqContentAnswerThree(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-three')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-three')
        });
    }
    function faqContentAnswerThreeDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq-answer-three')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-answer-three')
        });
    }
    function faqContentAnswerChildrenThree(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children-three')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children-three')
        });
    }
    function faqContentAnswerFour(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-four')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-four')
        });
    }
    function faqContentAnswerFourDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq-answer-four')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-answer-four')
        });
    }
    function faqContentAnswerChildrenFour(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children-four')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children-four')
        });
    }
    function faqContentAnswerFive(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-five')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-five')
        });
    }
    function faqContentAnswerFiveDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq-answer-five')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-answer-five')
        });
    }
    function faqContentAnswerChildrenFive(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children-five')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children-five')
        });
    }
    function faqContentAnswerSix(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-six')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-six')
        });
    }
    function faqContentAnswerSixDisplay(){
        const  allSkeleton = document.querySelectorAll('.faq-answer-six')
        allSkeleton.forEach(item=>{
        item.classList.add('faq-content-answer-six')
        });
    }
    function faqContentAnswerChildrenSix(){
        const  allSkeleton = document.querySelectorAll('.faq-content-answer-skeletone-children-six')
        allSkeleton.forEach(item=>{
        item.classList.remove('faq-content-answer-skeletone-children-six')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            faqHeadSkeletone();
            faqSubHeadSkeletone();
            faqSubHeadDisplay();
            faqImageSkeletone();
            faqImageSvg();
            faqContent();
            faqContentTwo();
            faqContentThree();
            faqContentFour();
            faqContentFive();
            faqContentSix();
            faqContentAnswer();
            faqContentAnswerChildren();
            faqContentAnswerTwo();
            faqContentAnswerTwoDisplay();
            faqContentAnswerChildrenTwo();
            faqContentAnswerThree();
            faqContentAnswerThreeDisplay();
            faqContentAnswerChildrenThree();
            faqContentAnswerFour();
            faqContentAnswerFourDisplay();
            faqContentAnswerChildrenFour();
            faqContentAnswerFive();
            faqContentAnswerFiveDisplay();
            faqContentAnswerChildrenFive();
            faqContentAnswerSix();
            faqContentAnswerSixDisplay();
            faqContentAnswerChildrenSix();
        }, 8000);
        return ()=> clearTimeout(timer);
    });

    // Faq Demo
    function faqDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-faq-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-faq-bg-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            faqDemoBg();
        }, 10);
        return ()=>clearTimeout(timer);
    });

    return (
        <>  
            <section id="faq" >
                <span className='side__text faq-head-skeletone'></span> 
                <div className='container faq__container' >
                    <div className=''>
                        <div className='card-header faq__header side__text'>
                            <h6 className='faq__display__off faq__display__on faq__object'></h6>
                            <span className='faq__sub__head__title__skeletone'></span>
                        </div>
                        <div className='card-body faq-card-body'> 
                            <div className='row'>
                                <div className='form-control-sm col-md-4'>
                                    <div className='card-body'>
                                        <div className='accordion'>
                                            <img className='faq-image' src="../faq-image/faqimage.png" alt="faq" />
                                            <span className='faq-image-skeletone'></span>
                                            <div className="card svg__card">
                                                <span className='faq__svg__image'><FaqSvg /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-control-sm col-md-8'>
                                    <div className='card-body'>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    <span className='faq-content-skeletone'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone'></span><br />
                                                    <span className='faq-content-answer-skeletone-children'></span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span className='faq-content-skeletone content-two'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone-two faq-answer-two'></span><br />
                                                    <span className='faq-content-answer-skeletone-two'></span><br />
                                                    <span className='faq-content-answer-skeletone-two'></span><br />
                                                    <span className='faq-content-answer-skeletone-children-two'></span><br />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span className='faq-content-skeletone content-three'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone-three faq-answer-three'></span><br />
                                                    <span className='faq-content-answer-skeletone-three'></span><br />
                                                    <span className='faq-content-answer-skeletone-three'></span><br />
                                                    <span className='faq-content-answer-skeletone-children-three'></span><br />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <span className='faq-content-skeletone content-four'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone-four faq-answer-four'></span><br />
                                                    <span className='faq-content-answer-skeletone-four'></span><br />
                                                    <span className='faq-content-answer-skeletone-four'></span><br />
                                                    <span className='faq-content-answer-skeletone-children-four'></span><br />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <span className='faq-content-skeletone content-five'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone-five faq-answer-five'></span><br />
                                                    <span className='faq-content-answer-skeletone-five'></span><br />
                                                    <span className='faq-content-answer-skeletone-five'></span><br />
                                                    <span className='faq-content-answer-skeletone-children-five'></span><br />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    <span className='faq-content-skeletone content-six'></span>
                                                </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <span className='faq-content-answer-skeletone-six faq-answer-six'></span><br />
                                                    <span className='faq-content-answer-skeletone-six'></span><br />
                                                    <span className='faq-content-answer-skeletone-six'></span><br />
                                                    <span className='faq-content-answer-skeletone-children-six'></span><br />
                                                    
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='demo-faq-bg' src='../demo-background/demo-faq-bg.png' alt='demo-slider' />            
            </section>
        </>
    )
}

export default FaqCard;
