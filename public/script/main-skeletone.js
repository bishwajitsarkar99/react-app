// css-skeleton
function mainSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-skeletone')
    item.classList.add('comp__name')
    });
}
function langSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-menu-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-menu-skeletone')
    item.classList.add('lang')
    });
}
function accSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-acc-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-acc-skeletone')
    item.classList.add('acc')
    });
}
function homeSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-home-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-home-skeletone')
    item.classList.add('home')
    });
}
function productSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-products-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-products-skeletone')
    item.classList.add('products')
    });
}
function aboutSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-about-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-about-skeletone')
    item.classList.add('about')
    });
}
function blogSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-blog-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-blog-skeletone')
    item.classList.add('blog')
    });
}
function testimonialSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-testimonial-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-testimonial-skeletone')
    item.classList.add('testimonial')
    });
}
function faqSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-faq-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-faq-skeletone')
    item.classList.add('faq')
    });
}
function servicesSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-services-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('header-services-skeletone')
    item.classList.add('services')
    });
}
function contractSkeletone(){
    const  allSkeleton = document.querySelectorAll('.header-contract-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('header-contract-skeletone')
        item.classList.add('contracts')
    });
}
function headerLogoSkeletone(){
    const  allSkeleton = document.querySelectorAll('.icon-logo-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('icon-logo-skeletone')
    });
}
function headerDarkLogoSkeletone(){
    const  allSkeleton = document.querySelectorAll('.icon-dark-mode-skeletone')
    allSkeleton.forEach(item=>{
    item.classList.remove('icon-dark-mode-skeletone')
    item.classList.add('icon-link-display')
    });
}
 setTimeout(() => {
    mainSkeletone();
    langSkeletone();
    accSkeletone();
    homeSkeletone();
    productSkeletone();
    aboutSkeletone();
    blogSkeletone();
    testimonialSkeletone();
    faqSkeletone();
    servicesSkeletone();
    contractSkeletone();
    headerLogoSkeletone();
    headerDarkLogoSkeletone();
}, 8000);
