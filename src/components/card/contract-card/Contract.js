import React, {useEffect} from 'react'

const Contract = () => {

    // Contract Head Skeletone
    function contractHeadTextSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-head-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-head-skeletone')
        item.classList.add('contract-head-text')
        });
    }
    // Contract Sub Head Skeletone
    function contractSubTitleTextSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-sub-title-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-sub-title-skeletone')
        item.classList.add('contract-sub-title-text')
        });
    }
    // Bounce Text Skeletone
    function contractBounceTextSkeletone(){
        const  allSkeleton = document.querySelectorAll('.bounce-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('bounce-skeletone')
        });
    }
    // Contract Info Paragraph
    function contractInfoParagraphSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contrac-info-paragraph-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contrac-info-paragraph-skeletone')
        item.classList.add('contract-info-text')
        });
    }
    // Contract Icon Skeletone
    function contractInfoIcon(){
        const  allSkeleton = document.querySelectorAll('.contract-icon-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-icon-skeletone')
        });
    }
    // Contract Info Paragraph Two Skeletone
    function contractInfoParagraphTwoSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-info-skeletone-one')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-info-skeletone-one')
        item.classList.add('contract-info-text-one')
        });
    }
    // Contract Form
    function contractFormSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-form-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-form-skeletone')
        item.classList.add('contract-form-title')
        });
    }
    // Input Field Skeletone
    function contractFormInputFieldSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-input-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-input-skeletone')
        });
    }
    // Text Area Skeletone
    function contractFormTextAreaSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-text-area-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-text-area-skeletone')
        });
    }
    // Contract Info Button
    function contractFormButtonSkeletone(){
        const  allSkeleton = document.querySelectorAll('.contract-button-skeletone')
        allSkeleton.forEach(item=>{
        item.classList.remove('contract-button-skeletone')
        });
    }
    // Contract Info Two Text
    function contractInfoTextTwo(){
        const  allSkeleton = document.querySelectorAll('.contract-add-text-two')
        allSkeleton.forEach(item=>{
        item.classList.add('contract-info-text-two')
        });
    }
    // Contract Info Three Text
    function contractInfoTextThree(){
        const  allSkeleton = document.querySelectorAll('.contract-info-text-three')
        allSkeleton.forEach(item=>{
        item.classList.add('contract-info-text-three')
        });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            contractHeadTextSkeletone();
            contractSubTitleTextSkeletone();
            contractBounceTextSkeletone();
            contractInfoParagraphSkeletone();
            contractInfoIcon();
            contractInfoParagraphTwoSkeletone();
            contractFormSkeletone();
            contractFormInputFieldSkeletone();
            contractFormTextAreaSkeletone();
            contractFormButtonSkeletone();
            contractInfoTextTwo();
            contractInfoTextThree();
        }, 8000);

        return () => clearTimeout(timer);
    });

    
    // Contract Demo
    function contractDemoBg(){
        const  allSkeleton = document.querySelectorAll('.demo-contract-bg')
        allSkeleton.forEach(item=>{
        item.classList.add('demo-contract-bg-off')
        });
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            contractDemoBg();
        },10);
        return ()=>clearTimeout(timer);
    });

    const Message ={
        height: 100
    }
    const ContractSubtitle={
        fontSize:12,
        paddingLeft:5,
        fontWeight:700,
    }

    const location ={
        fontSize:14,
        fontWeight:500
    }

  return (
    <>
        <section className='contract___section' id="contact">
            <h1 className='contract__head side__text'>
                <spna className='contract-head-skeletone' ></spna>
                <span className='contract__subTitle contract-sub-title-skeletone ' style={ContractSubtitle}></span>
            </h1>
            <div className='row contract__card__bundel'>
                <div className='col-6'>
                    <div className='card contract'>
                        <div className='card-body contract'>
                            <div class="form-group">
                                <h2 className='user__label lbl__contract'  for="usr">
                                    <span className='bounce-skeletone'>F</span>
                                    <span className='bounce-skeletone'>r</span>
                                    <span className='bounce-skeletone'>e</span>
                                    <span className='bounce-skeletone'>e</span>
                                    <span className='bounce-skeletone'>l</span>
                                    <span className='bounce-skeletone'>y</span>
                                    <span className='bounce-skeletone'>T</span>
                                    <span className='bounce-skeletone'>o</span>
                                    <span className='bounce-skeletone'>C</span>
                                    <span className='bounce-skeletone'>o</span>
                                    <span className='bounce-skeletone'>n</span>
                                    <span className='bounce-skeletone'>t</span>
                                    <span className='bounce-skeletone'>r</span>
                                    <span className='bounce-skeletone'>a</span>
                                    <span className='bounce-skeletone'>c</span>
                                    <span className='bounce-skeletone'>t</span>
                                </h2><br></br>
                                <span className='contract__subtitle contrac-info-paragraph-skeletone '> </span><br /><br />
                                <span className='icon contract-icon-skeletone'>
                                    <i class="fa-regular fa-map"></i>
                                </span>
                                <span className='location contract-info-skeletone-one'></span><br /><br />
                                <span className='icon contract-icon-skeletone'>
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span className='location contract-info-skeletone-one contract-add-text-two'> </span><br /><br />
                                <span className='icon contract-icon-skeletone'>
                                    <i class="fa-solid fa-globe"></i>
                                </span>
                                <span className='location contract-info-skeletone-one contract-add-text-three'></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card contract__card'>
                        <div className='card-body contract__body'>
                            <div className='form-group form__head'>
                                <span className='contract__form contract-form-skeletone'></span>
                            </div>
                            <div className="form-group">
                                <input type="text" id='input__field' class="form-control visitor__input" required placeholder='Name'/>
                                <span className='contract-input-skeletone'></span>
                            </div>
                            <div className="form-group">
                                <input type="email" id='input__field' class="form-control visitor__input mt-2" required placeholder='Email'/>
                                <span className='contract-input-skeletone'></span>
                            </div>
                            <div className="form-group">
                                <textarea id='input__field' class="form-control visitor__input mt-2" rows={5} cols={5} placeholder="Leave a comment here" style={{Message}}></textarea>
                                <span className='contract-text-area-skeletone'></span>
                            </div>
                            <div className='form-group'>
                                <button className='form-control send__btn btn btn-sm mt-2'>
                                    <span className='contract-button-skeletone btn-text-display'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='demo-contract-bg' src='../demo-background/demo-contract-bg.png' alt='demo-slider' />  
        </section>
        <section className='google--map'>
            <div className='current--location'>
                <div className='side__text location--part'>
                    <h1>GST Medicine Center</h1>
                    <span style={location} >Road 16,House-40,Sector 14,Uttara,Dhaka-1200.</span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.617951418238!2d90.38652287410459!3d23.867696584265456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52508392dd9%3A0xb4ca29290ae07ede!2sUttara%20%2CSector%2014%2C%20Road%2016%2C%20House%2040!5e0!3m2!1sbn!2sbd!4v1705776713912!5m2!1sbn!2sbd" 
                    width="1200" height="450"allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    </>
  )
}

export default Contract;
