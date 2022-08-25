import React from 'react';
import './footer.css';
import Images from '../../Components/Constant/assets';

function footer() {
  return (
    <div className=''>
        <div class="uk-section uk-section-muted">
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
                                <a href="#">
                                    <i class="uil uil-arrow-circle-right"></i> Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <i class="uil uil-arrow-circle-right"></i> About Us 
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <i class="uil uil-arrow-circle-right"></i> Our Service 
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <i class="uil uil-arrow-circle-right"></i> Contact Us
                                </a>
                            </li>
                        </ul>
					</div>
                    <div class="widget footer_useful_links">
                        <h2 class="footer_widget_title">Contact Us</h2>
                        <ul className='ul_li_block clearfix uk-list'>
                            <li>
                                <a href="tel:+911234567890">
                                    <span>
                                        <i class="uil uil-phone"></i>  1234567890
                                    </span> 
                                </a>
                            </li>
                            <li>
                                <a href='mailto:geethaa14367@gmail.com'>
                                    <span><i class="uil uil-at"></i> geethaa14367@gmail.com</span> 
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span><i class="uil uil-user-location"></i> Location</span> 
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