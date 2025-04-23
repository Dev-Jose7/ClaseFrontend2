import React from 'react'

export default function habitacion() {
  return (
    <>
        <div className="w3-third w3-margin-bottom">
            <img src="https://www.w3schools.com/w3images/room_single.jpg" alt="Norway" style={{"width":"100%"}}/>
            <div className="w3-container w3-white">
                <h3>Single Room</h3>
                <h6 className="w3-opacity">From $99</h6>
                <p>Single bed</p>
                <p>15m<sup>2</sup></p>
                <p className="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i></p>
                <button className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
            </div>
        </div>
    </>
  )
}
