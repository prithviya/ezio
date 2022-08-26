import React from 'react';
import './navbar.css'
import Images from '../../Components/Constant/assets';
import { Link } from "react-scroll";

function navbar() {
  return (
    <div>
        <nav className='uk-navbar-container' data-uk-navbar>
            <div className='uk-navbar-left uk-margin-medium-left'>
                <ul className='uk-navbar-nav'>
                    <li className='uk-active'>
                        <a href="#">
                            <img src={ Images.BRAND_LOGO } width='80px' height='80px' />
                        </a>
                    </li>
                </ul>

            </div>
            <div class="uk-navbar-right uk-margin-small-right">
                <ul class="uk-navbar-nav">
                    <li className='uk-visible@m custom_nav_menu'>
                        
                        <Link to="home" spy={true} smooth={true}>Home</Link>
                        
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <Link to="about" spy={true} smooth={true}>About</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <Link to="service" spy={true} smooth={true}>Service</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                    <Link to="team" spy={true} smooth={true}>Testimonials</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                    </li>
                    <li className='uk-hidden@m custom_nav_menu'>
                        <a class="uk-margin-small-right" uk-toggle="target: #offcanvas-nav-primary">
                            <img src={ Images.NAV_MENU }/>
                        </a>
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                    <li className='uk-active'>
                                        <a href="#" className='uk-hidden@m custom_nav_menu'>
                                            <img src={ Images.BRAND_LOGO } width='80px' height='80px' />
                                        </a>
                                    </li>
                                    <hr/>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="home" spy={true} smooth={true}>Home</Link>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="about" spy={true} smooth={true}>About</Link>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="service" spy={true} smooth={true}>Service</Link>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="team" spy={true} smooth={true}>Testimonials</Link>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                                    </li>
                                </ul>    
                            </div>
                        </div>
                        
                    </li>
                </ul>

            </div>
        </nav>
        <button
                onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{
                position: 'fixed',
                padding: '7px 7px',
                fontSize: '2rem !important',
                bottom: '40px',
                right: '40px',
                background: 'linear-gradient(19deg, #ff4500 10%, #d43b04 100%)',
                // backgroundColor: 'rgb(212, 59, 4)',
                // background: url('..'),
                color: '#fff',
                textAlign: 'center',
                zIndex: '9999',
                borderRadius: '5px',
                }}
            >
                <img src="https://img.icons8.com/ios-filled/20/FFFFFF/login-rounded-up.png"/>
            </button>
    </div>
  )
}

export default navbar