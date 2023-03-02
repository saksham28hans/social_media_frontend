import React from 'react';
import './clfriend.css'
const Clfriend = (props) => {
const user = props.user;
  return (
    <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default Clfriend;
