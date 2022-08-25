import React from 'react';
import './test.css';
import Images from '../../Components/Constant/assets';

function test() {
  return (
    <div>
         <div className='uk-section custom-light-section'>
            <div className='uk-container uk-text-center'>
                <div className='underline-text2'>
                    <h1 className='title uk-margin-remove'>What our <span>Customers </span>Say</h1>
                </div>
                <p className='uk-margin-top'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    <br/> eiusmod tempor incididunt ut labore et dolore"</p>
            </div>
            <div>
                <div className='uk-padding-remove-bottom' >
                    <div data-uk-slider="center: True">
                        <ul class="uk-slider-items  uk-grid uk-grid-match">
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Images.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3 className="uk-margin-remove">Name</h3>
                                                    <h5 className="uk-margin-remove">Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Images.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3 className="uk-margin-remove">Name</h3>
                                                    <h5 className="uk-margin-remove">Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Images.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3 className="uk-margin-remove">Name</h3>
                                                    <h5 className="uk-margin-remove">Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Images.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3 className="uk-margin-remove">Name</h3>
                                                    <h5 className="uk-margin-remove">Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Images.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3 className="uk-margin-remove">Name</h3>
                                                    <h5 className="uk-margin-remove">Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>                    
                </div>
            </div>
        </div>   
    </div>    
  )
}

export default test