import React from "react";
import ReactDOM from "react-dom";
import Article from "./components/Article";
import Education from "./components/Education";
import Meetup from "./components/Meetup";
import Job from "./components/Job";
import styles from "../src/style.css";
import img from "./images/Rectangle1.png";
import mc from "./images/Rectangle2.png";
import edu from "./images/Rectangle 3.png";
import pp1 from "./images/Rectangle 8.png";
import pp2 from "./images/Rectangle 6.png";
import meet from "./images/Rectangle 4.png";
import pp3 from "./images/Rectangle 7.png";
import pp4 from "./images/Rectangle 5.png";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import InfoIcon from '@material-ui/icons/Info';
import LocationOnIcon from '@material-ui/icons/LocationOn';

ReactDOM.render(
    <div>
    <div className="header">
            <div >
                <h2 className="logo">ATG.WORLD</h2>
            </div>
            <div className="search">
            
                <input type="search" name="searchbox" id="searchbox" placeholder=   "Search for your favourite group in ATG"/>
            </div>
            <div className="login">
                <p >Create account. <span onClick={() => window.open("./src/indexx.html")}> It's free!</span><ArrowDropDownIcon /></p>
            </div>
            <div className="maincontent">
                <img src={mc}></img>
                <h2 className="contenttext">Computer Engineering</h2>
                <p className="heading">142,576 Computer Engineer follow this</p>
            </div>
    </div>
    <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">All post(32)</a>
                  
                  
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link disabled" aria-current="page" href="#">Article</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Event</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Education</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled">Job</a>
                      </li>
                      <button type="button" className="btn-light">Write Post <ArrowDropDownIcon /></button>
                      <button type="button" className="btn btn-primary btn-lg"><GroupAddIcon className="GroupAddIcon" /> Join Group</button>
                      <hr className="hr" />
                      <LocationOnIcon className="LocationOn" /><p className="locationn">Noida , India <CreateIcon className="pencil"/></p>
                      <hr className="line"/>
                      <InfoIcon fontSize="small" className="info"/><p className="tagline">   Your location will help us serve better and extend a personalised experience.</p>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>
    
        <Article
        picture={img}
        heading="✍️ Article"
        title="What if famous brands had regular fonts?Meet RegularBrands!"
        text="I've worked in UX for the better of a decade . From now on, I plan to rei..."
        pp={pp1}
        
        name="Sarthak Kamra"
        views="1.4k views"
        />
        
        <Education   
        heading= "🔬️ Education"
        title="Tax Benefit for Investment under National Pension Scheme launched by Goverment"
        text="I've worked in UX for the better of a decade . From now on, I plan to rei..."
        pp={pp2}
        picture={edu}
        name="Sarah West"
        views="1.4k views"
        />  

        <Meetup
        heading="🗓️ Meetup"
        title="Finance & investment Elite Social Mixer @Lujiazui"
        date="Fri,12 Oct,2018"
        location="Visit Ahmedabad"
        pp={pp3}
        picture={meet}
        name="Ronal Jones"
        views="1.4k views"
        /> 

        <Job
        heading="💼️ Job"
        title="Software devoloper"
        text="Innovaccer Analytics Private Ltd."
        location="Noida, India"
        pp={pp4}
        name="Joseph Grey"
        button="Apply on timejobs"
        views="1.4k views"
        />
    
    </div>  ,
    document.getElementById("root"));


