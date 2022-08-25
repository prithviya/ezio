import React from 'react';
import './footer.css';
import Images from '../../Components/Constant/assets';
import { Link } from "react-scroll";

function footer() {
  return (
    <div className=''>
        <div class="uk-section">
            <div class="uk-container">
                
                <div class="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                    <div>
                    <li className='uk-active'>
                        <a href="#">
                            <img src={ Images.BRAND_LOGO } width='80px' height='80px' />
                        </a>
                    </li>   
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div class="widget footer_useful_links">
						<h2 class="footer_widget_title">Quick Links</h2>
                        <ul className='ul_li_block clearfix uk-list'>
                            <li>
                                <Link to="home" spy={true} smooth={true}>
                                    <img src="https://img.icons8.com/ios/30/99164b/--right-turn-sign.png"/> Home
                                </Link> 
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true}>
                                    <img src="https://img.icons8.com/ios/30/99164b/--right-turn-sign.png"/> About
                                </Link> 
                            </li>
                            <li>
                                <Link to="service" spy={true} smooth={true}>
                                    <img src="https://img.icons8.com/ios/30/99164b/--right-turn-sign.png"/> Service
                                </Link> 
                            </li>
                            <li>
                                <Link to="team" spy={true} smooth={true}>
                                    <img src="https://img.icons8.com/ios/30/99164b/--right-turn-sign.png"/> Testimonial
                                </Link> 
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true}>
                                    <img src="https://img.icons8.com/ios/30/99164b/--right-turn-sign.png"/> Contact Us
                                </Link> 
                            </li>
                        </ul>
					</div>
                    <div class="widget footer_useful_links">
                        <h2 class="footer_widget_title">Follow Us</h2>
                        <ul class="social-list uk-list">
                            <li>
                                <a href="#" target="_top" title="Facebook" class="social-icon">
                                    <span className='text-pink' >
                                    <img src="https://img.icons8.com/laces/32/4D4D4D/facebook-new.png"/> Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_top" title="LinkedIn" class="social-icon">
                                    <span className='text-pink'>
                                    <img src="https://img.icons8.com/laces/32/4D4D4D/whatsapp.png"/> Whatsapp
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_top" title="Whatsapp" class="social-icon">
                                    <span className='text-pink'>
                                    <img src="https://img.icons8.com/laces/32/4D4D4D/instagram-new.png"/> Instagram
                                    </span> 
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_top" title="Email" class="social-icon">
                                    <span className='text-pink'>
                                    <img src="https://img.icons8.com/laces/32/4D4D4D/youtube-play.png"/> Youtube
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>                   
                </div>
            </div>
        </div>
        <hr className='uk-margin-remove'/>
        <p className='uk-margin-remove uk-text-center text-pink'>© 2022 Developer by geetha. All rights reserved</p>
    </div>
  )
}

export default footer