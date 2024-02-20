import React,{useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import axios from 'axios';
import { BASE_URL } from '../../http';
import toast from 'react-hot-toast';

const Header = () => {
    // Logo
    const logo ={
        name: 'Hedy Lamarr',
        logoUrl: '../logo/gst-logo.png',
        logoSize: 53,
        logoHeight:30
    }
    // Nav bar Menu
    const menu ={
        marginTop:0,
        marginButtom:10,
    }
    const SideBarHead = () =>{
        return <p className="sidebar_head__name company">GST Medicine Center</p>
    }
    // Scroll Change Navbar Color and Show Menu
    const [color,setColor] = useState(false)
    const [bgColor,setBgColor] = useState(false)
    const [clicked,setClicked] = useState(false)
    const [logoDisplay,setLogoDisplay] = useState(false)
    const [logoSkeletone,setlogoSkeletone] = useState(false)
    const [sidebarHeader,setSidebarHeader] = useState(false)
    const [navbarMenuButton,setNavBarButton] = useState(false)
    const [sidebarLogo,setSidebarLogo] = useState(false)
    const [sidebarHeadWord,setSideBarHeadWord] = useState(false)
    const [canvasBackground, setCanvasBackground] = useState(false)
    const [sidebarTopMenus,setSidebarTopMens] = useState(false)
    const [sidebarPageTitle,setSidebarPageTitle] = useState(false)
    const [sidebarPageMenu,setSidebarPageMenu] = useState(false)
    const ChangeColor = () =>{
        if(window.scrollY >=151){
            setColor(true)
            setClicked(true)
            setBgColor(true)
            setLogoDisplay(true)
            setlogoSkeletone(true)
            setSidebarHeader(true)
            setNavBarButton(true)
            setSidebarLogo(true)
            setSideBarHeadWord(true)
            setCanvasBackground(true)
            setSidebarTopMens(true)
            setSidebarPageTitle(true)
            setSidebarPageMenu(true)
        }
        else
        {
            setColor(false)
            setClicked(false)
            setBgColor(false)
            setLogoDisplay(false)
            setlogoSkeletone(false)
            setSidebarHeader(false)
            setNavBarButton(false)
            setSidebarLogo(false)
            setSideBarHeadWord(false)
            setCanvasBackground(false)
            setSidebarTopMens(false)
            setSidebarPageTitle(false)
            setSidebarPageMenu(false)
        }
    }
    window.addEventListener('scroll',ChangeColor);

    const navigate = useNavigate();

    const handleLogout = (e) => {

        e?.preventDefault();

        const token =  window.localStorage.getItem('auth_token');
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token? 'Bearer ' +token: '',
            }
        };

        axios.post(BASE_URL+'api/logout', {}, config).then(res => {

            console.clear();
            toast.success(res.data.message);
            window.localStorage.removeItem('auth_token');
            
            setTimeout(() => {
                navigate('/');
            }, 1500);
            
        }).catch(err => {

            
        });
    }
    
    return (
        <div className="App">
            
            <header className={color ? 'nav nav-bg' : 'nav'} style={{'position':'fixed'}}>
                <head className={bgColor ? 'head__background head__bg' : 'head__background'}>
                    <div className="col-md-1 mt-1 mb-1">
                        <a href='http://localhost:3000/' className='head__icon icon-logo-skeletone'>
                            <img className="avtara head__icon icon_slide"src={logo.logoUrl}
                                alt={'Logo of ' + logo.name}
                                style={{
                                    width: logo.logoSize,
                                    height: logo.logoHeight
                                }} 
                            />
                        </a>
                    </div>
                    <div className='col-md-4 company__name'>
                        <p className="head__name company header-skeletone"></p>
                    </div>
                    <div className='col-md-7' style={{float:'right'}}>
                        <div className="head__container media">
                            <ul className="top__menu">
                                <li>
                                    <a activeClass="active" smooth spy to="lang">
                                        <span className='header-menu-skeletone'></span>
                                    </a>
                                </li>
                                <li>
                                    <a activeClass="active" smooth spy to="#">
                                        <i class="fa-solid fa-arrows-rotate"></i>
                                        <span className='badget badget-primary ms-1'></span>
                                        <span className='flex-grow-1'>
                                            <span className='ms-1'>Compare</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a activeClass="active" smooth spy to="#">
                                        <i class="fa-regular fa-heart"></i>
                                        <span className='badget badget-primary ms-1'></span>
                                        <span className='flex-grow-1'>
                                            <span className='ms-1'>Wishlist</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a activeClass="active" smooth spy to="#">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <span className='badget badget-primary ms-1'></span>
                                        <span className='flex-grow-1'>
                                            <span className='ms-1'>Card</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/user-account' activeClass="active" smooth spy to="acc" data-tooltip-id="user-account" data-tooltip-content="Account" data-tooltip-place="bottom">
                                        <img className='avtara--img' src='../logo/avatar-place.png' alt='avatara-image' />
                                        {/* <span className='header-acc-skeletone'></span> */}
                                        <Tooltip id="user-account" />
                                    </a>
                                </li>

                                <li>
                                    <a href='/user-account' onClick={(e)=> handleLogout(e)}>
                                        Logout
                                        
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* <img className='demo-header-left-bg' src='../demo-background/demo-header-left-part-bg.png' alt='demo-slider' />  */}
                </head>
                
                <a href='http://localhost:3000/' className={logoSkeletone? 'avtara home_link icon-dark-mode-skeletone' : 'skeletone__display__none'}>
                    <img className={logoDisplay ? 'display__block' : 'display__none'} src='../logo/GST-LOGO-light-bg.png' alt='GST' />
                </a>
                <div className='col-md-5'>
                    <p className='search-bar' style={{backgroundColor:'white'}}>
                        <form className='categories__search' method='#' action='#'>
                            <div className="input-group">
                                <div className='form__categories'>
                                    <select className='form-control form-control-sm'  id='categoryDropdown'>
                                        <option value={'All Category'}><span>▼</span> All Category </option>
                                    </select>
                                </div>
                                <input type="text" aria-label="First name" className="form-control search-field" placeholder="I'm shoping for..."></input>
                                <button type='submit' className='form-control search-button'>Search</button>
                            </div>
                        </form>
                    </p>
                </div>
                <nav className="nav__container__actions">
                    <div>
                        <ul id="navbar">
                            <li>
                                <NavLink to="/" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-home-skeletone'></span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="#" activeClass="active" smooth spy to="products">
                                    <span className='header-products-skeletone'></span>
                                </a>
                            </li>
                            <li>
                                <NavLink to="/About" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-about-skeletone'></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Blog" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-blog-skeletone'></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Testimonial" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-testimonial-skeletone'></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Faq" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-faq-skeletone'></span> 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Services" className={({isActive})=>
                                `duration-200 ${isActive ? "active home__link__display" : ""}`}>
                                    <span className='header-services-skeletone'></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contract" className={({isActive}) =>
                                `duration-200 ${isActive ? "active home__link__display":""}`}>
                                    <span className='header-contract-skeletone'></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <img className='demo-header-right-bg' src='../demo-background/demo-header-right-part-bg.png' alt='demo-slider' /> */}
                </nav>
                <div id="mobile">
                    <button className={navbarMenuButton ? 'btn btn-light sidebar-btn-skeletone' : 'btn-display-block'} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i id='bar' className={ clicked ? "fa-solid fa-bars" :" "}></i>
                    </button>
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className={sidebarHeader ? 'offcanvas-header-scroll-bg' : 'offcanvas-header'}>
                            <span className={sidebarHeadWord ? 'sidebar_head_word_none' : 'sidebar_head_word'}>
                                <img className='side_bar_logo' src='../sidebar-image/sidebar-logo.png' alt='sidebar-logo' />
                                Sidebar Menu
                            </span>
                            <a className={sidebarLogo ? 'head__icon' : 'sidebar_logo_display__none'} href='index.html'>
                                <img className="avtara head__icon"src={logo.logoUrl}
                                    alt={'Logo of ' + logo.name}
                                    style={{
                                        width: logo.logoSize,
                                        height: logo.logoHeight
                                    }} 
                                />
                            </a>
                            <h5 className={sidebarHeader ? 'offcanvas-title' : 'display__none'}id="offcanvasWithBothOptionsLabel"><SideBarHead /></h5>
                            <button type="button" className="close_btn text-black" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i class="fa-solid fa-xmark" style={{color:'white'}}></i>
                            </button>
                        </div>
                        <span className={sidebarTopMenus ? 'sidebar_menus_bg' : 'sidebar_menus'}>
                            <div className="head__container media">
                                <ul className={menu}>
                                    <li>
                                        <a activeClass="active" smooth spy to="contact">
                                            <span className=''>Language</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a activeClass="active" smooth spy to="contact">
                                            Account
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </span>
                        <div className='offcanvas__bg'>
                            <video className='sidebar__video__bg' src='../video/BgVideo.mp4' autoPlay loop muted />
                        </div>
                        <div className={canvasBackground ? 'offcanvas-body canvas_orange_bg' : 'offcanvas-body canvas_black_bg'}>
                            <p className={sidebarPageTitle ? 'page__title__none' : 'page__title'}>Try scrolling the rest of the page to see this option in action.</p>
                            <ul className={sidebarPageMenu ? 'menu__show' : 'menu_hidden'}>
                                <li>
                                    <a href='#'>Testimonial</a>
                                </li>
                                <li>
                                    <a href='#services'>Services</a>
                                </li>
                                <li>
                                    <a href='#'>FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
