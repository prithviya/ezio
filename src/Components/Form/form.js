import React from 'react';
import './form.css';

function form() {
  return (
    <div>
        <div class="uk-card uk-card-body">
            <form id="form">
                <h4 class="uk-margin">
                    Leave a request and our specialist will contact you within 15 minutes
                </h4>
                <div class="input-box active">
                    <label class="input-label">Name</label>
                    <input type="text" class="input-1" name="user_name" required=""/>
                </div>
                <div class="input-box active">
                    <label class="input-label">Email</label>
                    <input type="email" class="input-1" name="user_email" required=""/>
                </div>
                <div class="input-box active">
                    <label class="input-label">Phone Number</label>
                    <input type="tel" class="input-1" name="user_mobile" pattern="[6789][0-9]{9}" required=""/>
                </div>
                <div class="textarea active">
                    <label class="input-label">Message</label>
                    <textarea rows="5" cols="50" class="input-1" name="user_message"></textarea>
                </div>
                <button type="submit" className='uk-button-danger uk-button'>
                     Get a Free Consultation
                </button>
                <div class="clear"></div>
            </form>
        </div>
    </div>
  )
}

export default form