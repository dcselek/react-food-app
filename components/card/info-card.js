import React from "react";
import cn from "classnames";

import styles from "./info-card.module.css";
import Card from "./card";

function InfoCard() {
  return (
    <div>
    <div className={cn(styles.topTexts)}>
          <span>Adress details</span>
          <span>change</span>
      </div>
    <Card height={156} width={315}>

      <div className={cn(styles.infoCard)}>
        <span>Can Selek</span>
        <hr/>
        <span>
          Km 5 refinery road oppsite re public road, effurun, delta state
        </span>
        <hr/>
        <span>+234 9011039271</span>
      </div>
    </Card>
    </div>
  );
}

export default InfoCard;
