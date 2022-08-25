import React from 'react';
import Navigation_Bar from '../Navbar/navbar';


function banner() {
  return (
    <div>
        <Navigation_Bar/>
        <section id="custom-header">
            <div data-uk-slideshow="animation: Push; autoplay:true; autoplay-interval: 2800; pause-on-hover: true; min-height: 300; max-height: 550" className='uk-slideshow'>
                <div tabindex="-1" className='uk-position-relative uk-visible-toggle uk-light'>
                    <ul className='uk-slideshow-items'>
                        <li>
                            <img src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-cover/>
                            <div class="uk-position-center uk-position-small uk-text-center">
                                <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Think Twice Code Once</h2>
                                <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">First Solve the Problem Then write the code</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-cover/>
                            <div class="uk-position-center uk-position-small uk-text-center">
                                <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Think Twice Code Once</h2>
                                <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">First Solve the Problem Then write the code</p>
                            </div>
                        </li>
                        <li>
                            <img src='https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" data-uk-cover/>
                            <div class="uk-position-center uk-position-small uk-text-center">
                                <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Think Twice Code Once</h2>
                                <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">First Solve the Problem Then write the code</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default banner