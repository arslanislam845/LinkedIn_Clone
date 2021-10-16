import { Avatar } from "@material-ui/core";
import React, { forwardRef }  from "react";
import "../assets/styles/Addpost.css";
import PostOption from "./PostOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const FeedPosts = forwardRef(
  ({ AvatarURL, Description, Message, Name }, ref) => {
    return (
      <div ref={ref} className="feedPostContainer">
            <div className="feedPostHeader">
            {AvatarURL === "" ? <Avatar /> : <Avatar src={AvatarURL} />}
                <div className="feedPostHeading">
                    <h5>{Name}</h5>
                    <p>{Description}</p>
                </div>
            </div>
            <p>{Message}</p>
            <div className="InputOptionsContainer">
                <PostOption title="Like" Icon={ThumbUpAltIcon} color="#A9A9A9" />
                <PostOption title="Comment" Icon={CommentIcon} color="#A9A9A9" />
                <PostOption title="Share" Icon={ShareIcon} color="#A9A9A9" />
                <PostOption title="Send" Icon={SendIcon} color="#A9A9A9" />
            </div>
      </div>
    )
  }
)
export default FeedPosts;