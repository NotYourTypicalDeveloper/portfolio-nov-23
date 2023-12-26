import React from "react";
import "../../CircleImageStyles.css";
import { profilePic } from "../../assets/index.js";

export const ProfilePic = () => {
  return (
    <div
      className="profile-pic-box"
      style={{ backgroundImage: `url(${profilePic})` }}
    />
  );
};
