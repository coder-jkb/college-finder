import React from 'react'
import Navbar from './Navbar'
import '../css/Header.css'

export default function header() {
    return (
        <>
            <img className="collegefinder" src="collegefinder.png" alt="" srcSet="" style={{height:"12rem"}}/>
            <div className="mainheading"><strong>College Finder</strong></div>
            <div className="subheading"><strong>Finds the right Engineering college for you</strong></div>
           <Navbar/>   
        </>
    )
}