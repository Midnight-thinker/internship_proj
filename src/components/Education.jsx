import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Education(props){
    return(
        <div className="edu">
        <img className="pic2" src={props.picture}></img>
        <h4 className="heading2">{props.heading}</h4><MoreHorizIcon fontSize="large" className="MoreHorizIcon2" />
        <h2 className="title2">{props.title}</h2>
        <p className="text">{props.text}</p>
        <h3 className="name2">{props.name}</h3>
        <img className="pp2" src={props.pp}></img>
        <VisibilityIcon className='VisibilityIcon3' /><h4 className="views2">{props.views}</h4>
        <ShareIcon className="ShareIcon2"/>
    </div>);
}

export default Education;