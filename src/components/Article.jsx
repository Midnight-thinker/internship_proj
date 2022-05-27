import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Article(props){
return(
<div>
    <div className="article">
        <img className="pic" src={props.picture}></img>
        <h4 className="text1">{props.heading}</h4><MoreHorizIcon fontSize="large" className="MoreHorizIcon" />
        <h2 className="text2">{props.title}</h2>
        <p className="text3">{props.text}</p>
        <h3 className="text4">{props.name}</h3>
        <img className="pp1" src={props.pp}></img>
        <VisibilityIcon className='VisibilityIcon2' /><h4 className="text5">{props.views}</h4>
        <ShareIcon className="ShareIcon" />
    </div>
</div>);
}

export default Article;