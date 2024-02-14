import React, {useEffect} from 'react';
import {useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init();
    
    // Footer Skeletone
    function footerFirstBlockSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-skeletone')
        
        });
    }
    function footerFirstBlockChildrenSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-two-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-two-skeletone')
        item.classList.add('block__head')
        });
    }
    function footerFirstBlockParagraphOneSkeletoneone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-three-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-three-skeletone')
        item.classList.add('first-block-paragraph1')
        });
    }
    function footerFirstBlockChildren3Skeletonetwo(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-four-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-four-skeletone')
        item.classList.add('first-block-paragraph2')
        });
    }
    function footerFirstBlockChildren4Skeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-five-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-five-skeletone')
        item.classList.add('first-block-paragraph3')
        });
    }
    function footerFirstBlockChildren5Skeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-six-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-six-skeletone')
        item.classList.add('first-block-paragraph4')
        });
    }
    function footerFirstBlockChildren6Skeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-seven-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-seven-skeletone')
        item.classList.add('first-block-paragraph5')
        });
    }
    function footerFirstBlockChildre7Skeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-first-block-eight-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-first-block-eight-skeletone')
        item.classList.add('first-block-paragraph6')
        });
    }
    function footerSecondBlockSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-second-block-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-second-block-skeletone')
        item.classList.add('block_head2')
        });
    }
    function footerLastRowSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-last-row-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-last-row-skeletone')
        
        });
    }   
    function footerAboutSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-about-skeleton')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-about-skeleton')
        item.add('footer__about');
        });
    }
    function footersocialMediaSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-social-media-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-social-media-skeletone')
        });
    }
    function footerlastblockSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-last-block-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-last-block-skeletone')
        });
    }
    function footerNewsLetterSkeletone(){
        const  allSkeleton = document.querySelectorAll('.footer-news-scribe-two-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('footer-news-scribe-two-skeletone')
        item.add('subscribe__label')
        });
    }
    setTimeout(() => {
        footerFirstBlockSkeletone();
        footerFirstBlockChildrenSkeletone();
        footerFirstBlockParagraphOneSkeletoneone();
        footerFirstBlockChildren3Skeletonetwo();
        footerFirstBlockChildren4Skeletone();
        footerFirstBlockChildren5Skeletone();
        footerFirstBlockChildren6Skeletone();
        footerFirstBlockChildre7Skeletone();
        footerSecondBlockSkeletone();
        footerLastRowSkeletone();
        footerAboutSkeletone();
        footersocialMediaSkeletone();
        footerlastblockSkeletone();
        footerNewsLetterSkeletone();
    }, 8000);  

    // Footer Demo
    function footerDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-footer-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-footer-bg-off')
        });
    }
    // News Demo
    function footerNewsDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-news-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-news-bg-off')
        });
    }
    // Privacy Demo
    function footerPrivacyDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-privacy-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-privacy-bg-off')
        });
    }
    setTimeout(() => {
        footerDemoBg();
        footerNewsDemoBg();
        footerPrivacyDemoBg();
    }, 10);

    const [typeEffect] = useTypewriter({
        words: ['GST Medicine Center'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 30,
        pauseFor:2500,
        deleteChars:10
    })
    // company Name
    const companyName={
        color:'white'
    }
    // info font-size
    const infoTitle={
        fontSize:11
    }

    return (
        <div id='header-wrapper' className=''>
            <footer className="main-footer">
                <div className='row'>
                    <form>
                        <div class="input-group mb-3 new-letter-block-container">
                            <label className='subscribe__label footer-first-block-two-skeletone'></label>
                            <input id='#inputSubscribe' type="text" className="form-control susbcribe__input footer-first-block-two-skeletone" placeholder="Your Email Address....." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary susbcribe__btn" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </form>
                </div>
                <img className='demo-news-bg' src='../demo-background/demo-news-bg.png' alt='demo-slider' /> 

                <div className='row'>
                    <div className='col-sm footer__first__part first__card footer-first-block-skeletone' data-aos="flip-down" data-aos-duration="1000">
                        <h2 className='App__footer block__head footer-first-block-two-skeletone'></h2>
                        
                        <div className='group-input'>
                            <span className='type__writer__title comp_name' style={companyName}> 
                                {typeEffect} 
                                <span style={{color:'darkorange',fontSize:'18px'}}>
                                    <Cursor />
                                </span>
                            </span><br />
                            <div className='info__box' data-aos="flip-left" data-aos-duration="1500">
                                <span className='name__title addr__link__group footer-first-block-three-skeletone' style={infoTitle}></span><br />
                                <span className='paratitle__title link__group footer-first-block-four-skeletone' style={infoTitle}></span>
                                <span className='paratitle__title link__group footer-first-block-five-skeletone' style={infoTitle}></span><br />
                                <span className='paratitle__title link__group footer-first-block-six-skeletone' style={infoTitle}></span>
                                <span className='paratitle__title link__group footer-first-block-seven-skeletone' style={infoTitle}></span>
                                <span className='paratitle__title link__group footer-first-block-eight-skeletone' style={infoTitle}></span>
                            </div>
                        </div>
                    </div>
                    <div className='col footer__second__part footer-first-block-skeletone' data-aos="flip-down" data-aos-duration="1000">
                        <span className='App__footer footer-last-row-skeletone'>Helpful Links</span><br /><br />
                        <div className='group-input ' data-aos="flip-left" data-aos-duration="1500">
                            <span><a className='help_link link__group footer-last-row-skeletone' href='#'>➤ About us</a></span>
                            <span><a className='help_link link__group  footer-last-row-skeletone' href='#'>➤ Contract us</a></span>
                            <span><a className='help_link link__group  footer-last-row-skeletone' href='#'>➤ Customer Satisfy</a></span>
                            <span><a className='help_link link__group  footer-last-row-skeletone' href='#'>➤ Testimonial</a></span>
                        </div>
                    </div>
                    <div className='col footer__second__part footer-first-block-skeletone' data-aos="flip-down" data-aos-duration="1000">
                        <span className='App__footer  footer-last-row-skeletone'>Bussiness Reference</span><br /><br />
                        <div className='group-input' data-aos="flip-left" data-aos-duration="1500">
                            <span><a className='help_link link__group footer-last-row-skeletone' href='#'>➤ About us</a></span>
                            <span><a className='help_link link__group footer-last-row-skeletone' href='#'>➤ Contract us</a></span>
                            <span><a className='help_link link__group footer-last-row-skeletone' href='#'>➤ Customer Satisfy</a></span>
                            <span><a className='help_link link__group footer-last-row-skeletone' href='#'>➤ Testimonial</a></span>
                        </div>
                    </div>
                    <div className='col footer__second__part footer-first-block-skeletone' data-aos="flip-down" data-aos-duration="1000">
                        <div className='Social__media roll-skeleton footer-last-row-skeletone'>Social Media</div><br /><br />
                        <div className='group-input media__link__group row' data-aos="flip-left" data-aos-duration="1500">
                            <div className='col-sm media_group'>
                                <span className='footer-social-media-skeletone'>
                                    <a className='media_link' href='#'>
                                        <img className="image__youtube"src="/logo/app_facebook_logo.png"
                                            alt="Facebook"
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className='col-sm media_group'>
                                <span className='footer-social-media-skeletone'>
                                    <a className='linkedin_link' href='#'>
                                        <img className="image__youtube"src="/logo/app_linkedin_icon.png"
                                            alt="Linkedin"
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className='col-sm media_group'>
                                <span className='footer-social-media-skeletone'>
                                    <a className='messanger_link' href='#'>
                                        <img className="image__youtube"src="/logo/messenger logo_icon.png"
                                            alt="Messanger"
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className='col-sm media_group'>
                                <span className='footer-social-media-skeletone'>
                                    <a className='tiwtter_link' href='#'>
                                        <img className="image__youtube"src="/logo/popular_social_icon.png"
                                            alt="Tiwtter"
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className='col-sm media_group'>
                                <span className='footer-social-media-skeletone'>
                                    <a className='youtube_link' href='#'>
                                        <img className="image__youtube"src="/logo/youtube.png"
                                            alt="Youtube"
                                        />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='demo-footer-bg' src='../demo-background/demo-footer-bg.png' alt='demo-slider' />  
                
                <div className='row terms__condition footer-last-block-skeletone mt-1'>
                    <div className='col-9 offset-md-3'>
                        <a className='footer__links footer-last-row-skeletone' href='#'> Disclaimer</a>
                        <a className='footer__links footer-last-row-skeletone' href='#'> Privacy Policy</a>
                        <span>
                            <a className='footer__links footer-last-row-skeletone' href='index.html'>|| @ GST Medicine Center</a>
                            <span className='theme_footer_label footer-last-row-skeletone'> 2023.By Soft-theme Template</span>
                        </span>
                    </div>
                    
                    <img className='demo-privacy-bg' src='../demo-background/demo-privacy-bg.png' alt='demo-slider' />
                </div>
            </footer>
        </div>
    )
}

export default Footer;
