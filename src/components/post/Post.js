import { MoreVert } from '@material-ui/icons';
import {React, useState} from 'react';
import './post.css'
import { Users } from '../../dummyData';

const Post = (props) => {
  const post = props.post
  const user = Users.filter((us)=>{return us.id === post.userId})

  const [like, setlike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);

  const likehandler = ()=>{
    setlike(isLiked ? like-1: like+1);
    setisLiked(!isLiked)
  }
  return (
    <div className='post'>
     <div className="postWrapper">
         <div className="postTop">
            <div className="postTopLeft">
              <img src={user[0].profilePicture} alt="" className="postProfileImg" />
              <span className="postUserName">{user[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
             <MoreVert />
            </div>
         </div>
         <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
         </div>
         <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="likeIcon" onClick={likehandler} />
                <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likehandler} />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
         </div>
     </div>
    </div>
  );
}

export default Post;
