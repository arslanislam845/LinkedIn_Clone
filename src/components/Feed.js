import React,{useEffect,useState} from 'react'
import "../assets/styles/Addpost.css";
import Addpost from "./Addpost";
import FeedPost from './FeedPosts';
import {db} from "../server/firestore"
import FlipMove from "react-flip-move";

const Feed=()=>{
    const [FeedsPosts,setFeedsPosts]=useState([]);

    useEffect(()=>{
    db.collection("posts")
      .orderBy("publishedAt", "desc")
      .onSnapshot((snapshot) =>
      setFeedsPosts(
        snapshot.docs.map((doc)=>({
            Message:doc.data().Message,
            Name: doc.data().Name,
            Description:doc.data().Description,
            Avatar:doc.data().Avatar,
            id: doc.id
       
     })
     ))
     )
    },[])
   
    return(    
        <div class="Feed_main">
            <Addpost /> 
            <FlipMove>
                    {FeedsPosts &&
                     FeedsPosts.map((post)=>  
                    <FeedPost 
                       
                        key={post.id}
                        AvatarURL={post.Avatar}
                        Description={post.Description} 
                        Message={post.Message} 
                        Name={post.Name}
                    />
                    )
                    }
            </FlipMove>
        </div>
    )}
export default Feed;