import React from "react";
import cn from "classnames";

import pp from '../../public/pp.jpg'
import styles from "./profile-card.module.css";
import Card from "./card";

function ProfileCard({src = pp}) {
  return (
    <div className={styles.container}>
    <div className={cn(styles.topTexts)}>
          <span>Personal details</span>
          <span>change</span>
      </div>
    <Card height={197}>
      <div className={cn(styles.profileCard)}>
      <img src={src} alt='profile-picture'></img>
      <div className={cn(styles.details)}>
        <span>Can Selek</span>
        <span>cselekk97@gmail.com</span>
        <hr/>
        <span>+234 9011039271</span>
        <hr/>
        <span>
          Km 5 refinery road oppsite re public road, effurun, delta state
        </span>
      </div>
      </div>
    </Card>
    </div>
  );
}

export default ProfileCard;
