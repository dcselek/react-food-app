import React from "react";
import cn from "classnames";


import styles from "./profile-card.module.css";
import Card from "./card";

function ProfileCard({src = '../../public/pp.jpg'}) {
  return (
    <Card height={197} width={315}>
      <div className={cn(styles.profileCard)}>
      <img src={src} alt='profile-picture'></img>
      <div className={cn(styles.details)}>
        <span>Can Selek</span>
        <span>cselekk97@gmail.com</span>
        <hr />
        <span>+234 9011039271</span>
        <hr />
        <span>
          Km 5 refinery road oppsite re public road, effurun, delta state
        </span>
      </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
