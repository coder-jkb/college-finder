import React from 'react'
import { ReactSVG } from "react-svg"
import '../css/Navbar.css'

export default function Navbar() {
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    // function handleMenuClick() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //     x.className += " responsive";
    //     } else {
    //     x.className = "topnav";
    //     }
    // } 
    return (
        <>
            {/* Load an icon library to show a hamburger menu (bars) on small screens  */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="topnav" id="myTopnav">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Source</a>
                <a href="javascript:void(0);" className="menu" onClick={handleMenuClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </div> */}
            <nav className="navbar navbar-light" style={{float: "right", position: "relative", top: "-20rem", zIndex: "2",backgroundColor: "#dcdfe6"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active px-2 mx-1 my-0" aria-current="page" href="#">Home</a>
                        <a className="nav-link active px-2 mx-1 my-0" href="#">About</a>
                        <a className="nav-link active px-2 mx-1 my-0" href="#">Contact</a>
                        <hr style={{border: "0.5px solid black", width:"95%", margin:"0.5rem"}}/>
                        <a className="nav-link active px-2 mx-1 my-1" href="#"><ReactSVG className="github-icon" src="github.svg"/>Source</a>
                    </div>
                </div>
            </div>
            </nav>
        </>
    )
}


