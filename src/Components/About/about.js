import React from 'react'

function about() {
  return (
    <div>
        <div className='uk-section'>
            <div className='uk-container'>
                <h1 className='title'><span>Who We</span> Are ?</h1>
                <div className='uk-child-width-1-2@m uk-grid-small uk-grid-match' data-uk-grid>
                    <div>
                        <div className='uk-card uk-card-body'>
                            <h2 className='text-pink'>About Us</h2>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-body'>
                            <img src='https://images.pexels.com/photos/6614747/pexels-photo-6614747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about