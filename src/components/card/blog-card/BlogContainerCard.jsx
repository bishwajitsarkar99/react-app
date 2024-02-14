import React, {useEffect} from 'react'
import VideoBlogButton from '../../button/VideoBlogButton';
import PostBlogButton from '../../button/PostBlogButton';
import BlogSvg from '../../svg/BlogSvg';


function BlogContainerCard() {
    // Blog-Skeletone
    function blogTextDisplay(){
        const  allSkeleton = document.querySelectorAll('.text__display')
        allSkeleton.forEach(item=>{
        item.classList.add('blog__display__title')
        });
    }
    function blogTextSkeletone(){
        const  allSkeleton = document.querySelectorAll('.blog-content-title-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('blog-content-title-skeletone')
        });
    }
    function blogHeadTextDisplay(){
        const  allSkeleton = document.querySelectorAll('.blog-head-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('blog-head-skeletone')
        item.classList.add('blog__head__display')
        });
    }
    function blogImageSkeletone(){
        const  allSkeleton = document.querySelectorAll('.blog-page-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('blog-page-skeletone')
        });
    }
    function blogImageSvg(){
        const  allSkeleton = document.querySelectorAll('.blog-svg-image')
        allSkeleton.forEach(item=>{
        item.classList.add('blog-svg-mode-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            blogTextDisplay();
            blogTextSkeletone();
            blogHeadTextDisplay();
            blogImageSkeletone();
            blogImageSvg();
        }, 8000);
        return ()=> clearTimeout(timer);
    });

    // Blog Demo
    function blogDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-blog-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-blog-bg-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            blogDemoBg(); 
        }, 10);
        return ()=> clearTimeout(timer);
    });

    return (
        <>
            <section id="blog" >
                <span className='side__text blog-head-skeletone'></span> 
                <div className="container blog-container">
                    <div className="card blog-card-body blog-page-skeletone">
                        <img className='blog__image' src="../video/blog-bg.jpeg" alt="blog-bg" />
                                                        
                        <span>
                            <p className='blog__heading__paragraph text__display'> </p>
                            <span className='blog-content-title-skeletone'></span>
                        </span>
                        <span>
                            <img className='logo_display' src="../logo/GST-LOGO-light-bg.png" alt="logo" />
                            <span className='blog-svg-image'> <BlogSvg /> </span>
                        </span>
                        <span className='blog__button_group'>
                            <VideoBlogButton />
                            <PostBlogButton />
                        </span>
                    </div>
                    <img className='demo-blog-bg' src='../demo-background/demo-blog-bg.png' alt='demo-slider' /> 
                </div>
            </section>
        </>
    )
}

export default BlogContainerCard;
