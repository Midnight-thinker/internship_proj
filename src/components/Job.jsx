import React from "react";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Job(props){
return (<div className="job">
        <h4 className="heading4">{props.heading}</h4><MoreHorizIcon fontSize="large" className="MoreHorizIcon4" />
        <h2 className="title4">{props.title}</h2>
        <WorkOutlineIcon className='workIcon' /> <p className="textt"> {props.text}</p>
        <LocationOnIcon className='LocationOnIcon' /> <p className="location2">{props.location}</p>
        <button className=" button2 btn btn-light" type="button"><span>Apply on Timejobs</span></button>
        <img className="pp4" src={props.pp}></img><h3 className="name4">{props.name}</h3>
        <VisibilityIcon className='VisibilityIcon' /><h4 className="views4">{props.views}</h4>
        <ShareIcon className="ShareIcon4" />
    </div>);
}

export default Job;

