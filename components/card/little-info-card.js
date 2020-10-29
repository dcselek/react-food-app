import React from "react";
import cn from "classnames";

import pp from '../../public/pp.jpg'
import { Pencil } from "../icons";
import styles from "./little-info-card.module.css";
import Card from "./card";

function LittleInfoCard({classNames, src = "../../public/pp.jpg" }) {
  return (
    <div className={cn(styles.container,classNames)}>
        <div className={cn(styles.title)}>
      <span >Information</span>
      </div>
      <Card height={133}>
        <div className={cn(styles.profileCard)}>
          <img src={pp} alt="profile-picture"></img>
          <div className={cn(styles.details)}>
            <label>
              <span>Can Selek</span>
              <Pencil></Pencil>
            </label>

            <span>cselekk97@gmail.com</span>
            <span>
              No 15 uti street off ovie palace road effurun delta state
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LittleInfoCard;
