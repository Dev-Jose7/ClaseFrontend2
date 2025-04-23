import React from 'react'

export default function about(){
    return(
        <>
            <div className="w3-row-padding" id="about">
                <div className="w3-col l4 12">
                <h3>About</h3>
                <h6>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                <p>We accept: <i className="fa fa-credit-card w3-large"></i> <i className="fa fa-cc-mastercard w3-large"></i> <i className="fa fa-cc-amex w3-large"></i> <i className="fa fa-cc-cc-visa w3-large"></i><i className="fa fa-cc-paypal w3-large"></i></p>
                </div>
                <div className="w3-col l8 12">
                {/* <!-- Image of location/map --> */}
                <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image w3-greyscale" style={{"width":"100%"}}/>
                </div>
            </div>
  
        </>
    )
}


