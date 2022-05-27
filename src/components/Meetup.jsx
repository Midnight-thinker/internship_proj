import React from "react";
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Meetup(props){
    return(
    <div className="meetup">
        <img className="pic3" src={props.picture}></img>
        <h4 className="heading3">{props.heading} </h4><MoreHorizIcon fontSize="large" className="MoreHorizIcon3" />
        <h2 className="title3">{props.title}</h2>
        <TodayIcon className='TodayIcon' /><p className="date">{props.date}</p>
        <LocationOnIcon className='locationOnIcon' /><p className="location">{props.location}</p>
        <button className=" button btn btn-light" type="button"><span>Visit Website</span></button>
        <img className="pp3" src={props.pp}></img><h3 className="name3">{props.name}</h3>
        <VisibilityIcon className='VisibilityIcon1' /><h4 className="views3">{props.views}</h4>
        <ShareIcon className="ShareIcon3"/>
    </div>
    );
}

export default Meetup;