import React from 'react'
import Habitacion from './habitacion'

export default function habitaciones(){
    return (
        <>
            <div className="w3-container w3-margin-top" id="rooms">
                <h3>Rooms</h3>
                <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
            </div>
            
            <div className="w3-row-padding">
                <div className="w3-col m3">
                <label><i className="fa fa-calendar-o"></i> Check In</label>
                <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY"/>
                </div>
                <div className="w3-col m3">
                <label><i className="fa fa-calendar-o"></i> Check Out</label>
                <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY"/>
                </div>
                <div className="w3-col m2">
                <label><i className="fa fa-male"></i> Adults</label>
                <input className="w3-input w3-border" type="number" placeholder="1"/>
                </div>
                <div className="w3-col m2">
                <label><i className="fa fa-child"></i> Kids</label>
                <input className="w3-input w3-border" type="number" placeholder="0"/>
                </div>
                <div className="w3-col m2">
                <label><i className="fa fa-search"></i> Search</label>
                <button className="w3-button w3-block w3-black">Search</button>
                </div>
            </div>

            <div className="w3-row-padding w3-padding-16">

                <Habitacion />
                <Habitacion />
                <Habitacion />
                {/* <div className="w3-third w3-margin-bottom">
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
                <div className="w3-third w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/room_double.jpg" alt="Norway" style={{"width":"100%"}}/>
                <div className="w3-container w3-white">
                    <h3>Double Room</h3>
                    <h6 className="w3-opacity">From $149</h6>
                    <p>Queen-size bed</p>
                    <p>25m<sup>2</sup></p>
                    <p className="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i> <i className="fa fa-tv"></i></p>
                    <button className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
                </div>
                </div>
                <div className="w3-third w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/room_deluxe.jpg" alt="Norway" style={{"width":"100%"}}/>
                <div className="w3-container w3-white">
                    <h3>Deluxe Room</h3>
                    <h6 className="w3-opacity">From $199</h6>
                    <p>King-size bed</p>
                    <p>40m<sup>2</sup></p>
                    <p className="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i> <i className="fa fa-tv"></i> <i className="fa fa-glass"></i> <i className="fa fa-cutlery"></i></p>
                    <button className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
                </div>
                </div> */}
            </div>
        </>
    )
}