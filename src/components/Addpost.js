import React,{useState} from "react";
import "../assets/styles/Addpost.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PostOption from './PostOption'
import {db} from '../server/firestore';
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";


const Addpost=()=>{
  const user = useSelector(selectUser);
 
 const [InputPost,setInputPost]=useState('')
 const InputChangeHandler=(event)=>{
   setInputPost(event.target.value)
//console.log(event.target.value)
 }
  const CreatePostHandler = (e)=>{
    e.preventDefault()
    db.collection("posts")
    .add({ 
    Name: user.FullName,
    Description: user.Email,
    Message: InputPost,
    Avatar: user.ProfileURL == null ? "" : user.ProfileURL,
    publishedAt: firebase.firestore.FieldValue.serverTimestamp(),})
    .catch(()=>alert("Opps! posts not save Error Occur"))
    setInputPost("");
 }
 
  return(
      <div className="Addpost_main">
        <div className="Addpost">
            <div className="Addpost_img">
            <Avatar src={user.ProfileURL}></Avatar>
            </div>
            <form>
            <input type="text" placeholder="Start a Post" value={InputPost} onChange={InputChangeHandler}></input>
            <input type="submit" style={{display:"none"}} onClick={CreatePostHandler} ></input>
            </form>
        </div>
        <div className="Post_options">
            <PostOption Icon={PhotoIcon} title="Photo" color="Blue" />
            <PostOption Icon={YouTubeIcon} title="Video" color="green" />
            <PostOption Icon={EventIcon} title="Events" color="orange" />
            <PostOption Icon={LibraryBooksIcon} title="Write Artical" color="red" />  
        </div>

      </div>
  )
          }      
export default Addpost;