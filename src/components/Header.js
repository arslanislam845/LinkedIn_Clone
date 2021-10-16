import React from "react";
import LinkedInImage from "../assets/Images/linkedin.png";
import "../assets/styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "../assets/Images/Avtar.png";
import { auth } from "../server/firestore";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const SignOutHandler = () => {
    auth.signOut();
    dispatch(logout());
  };
 
  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedInImage} alt="Linked Logo"></img>
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home"  path="/" />
        <HeaderOptions Icon={PeopleIcon} title="My Networks" path="/network"/>
        <HeaderOptions Icon={WorkIcon} title="Jobs" path="/jobs"/>
        <HeaderOptions Icon={ChatIcon} title="Messaging" path="/messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" path="/notification"/>
        <HeaderOptions  Avatar={user.ProfileURL == "" ? Avatar : user.ProfileURL} />
        <button className="logout" onClick={SignOutHandler}> Log out </button>
         
      </div>
     

    </div>
  );
};

export default Header;