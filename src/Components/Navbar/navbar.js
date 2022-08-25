import React from 'react';
import './navbar.css'
import Images from '../../Components/Constant/assets';

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
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <a href="#">
                            Services
                        </a>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <a href="#">
                            Team
                        </a>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <a href="#">
                            Contact
                        </a>
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
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                        <a href="#">
                                            About
                                        </a>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                        <a href="#">
                                            Services
                                        </a>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                        <a href="#">
                                            Team
                                        </a>
                                    </li>
                                    <li className='uk-hidden@m custom_nav_menu'>
                                        <a href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>    
                            </div>
                        </div>
                        
                    </li>
                </ul>

            </div>
        </nav>
    </div>
  )
}

export default navbar