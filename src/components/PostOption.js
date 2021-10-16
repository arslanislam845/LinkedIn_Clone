import React from 'react'
import "../assets/styles/Addpost.css";

const PostOption=({Icon,title,color})=>{
    return(
    <div className="Addpost_items">
      {Icon && <Icon style={{color:color}}/>}
      {title && <h3>{title}</h3>} 
    </div>
    )}
export default PostOption;