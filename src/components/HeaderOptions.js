import React from "react";
import "../assets/styles/Header.css";
import {Link} from "react-router-dom"
const HeaderOptions = ({ title, Icon, Avatar,path}) => {
  return (
    <>
      <div className="HeaderItem">
        <Link to={path}>
        {Icon && <Icon />}
        {title && <div>{title}</div>}
        </Link>
        {Avatar && <img src={Avatar}  />}
       
      </div>
    </>
  );
};

export default HeaderOptions;