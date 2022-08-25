import React from 'react';
import Form from '../Form/form';

function contact() {
  return (
    <div id="contact" className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='title'>
                <span>Get In </span>Touch
            </h1>
            <div class="uk-child-width-1-2@m uk-grid-small uk-text-center uk-grid-match" data-uk-grid>
                <div>
                    <Form/>
                </div>
                <div>
                    <h2>
                        Contact Information
                    </h2>
                    
                    <a href="tel:+91 6374503801" className='uk-text-left'>
                        <img src="https://img.icons8.com/ios-filled/50/99164b/apple-phone.png" width={'50px'} height={'50px'} className=''/>
                        <span className='text-grey'>
                            +91 6374503801
                        </span>
                    </a>
                    <a href="mailto:geethaa14367@gmail.com" className='uk-text-left'>
                    <img src="https://img.icons8.com/ios-filled/50/99164b/apple-mail.png"width={'50px'} height={'50px'} className=''/>
                        <span className='text-grey'>
                            geethaa14367@gmail.com
                        </span>
                    </a>
                    <a href="mailto:geethaa14367@gmail.com" className='uk-text-left'>
                       <img src="https://img.icons8.com/ios-filled/50/99164b/user-location.png" className=''/>
                        <span className='text-grey'>
                            Pollachi Main Road, Coimbatore.
                        </span>
                    </a>
                    <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact