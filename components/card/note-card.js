import React from "react";
import cn from "classnames";

import MainButton from '../buttons/main-button'
import styles from "./note-card.module.css";
import Card from "./card";

function NoteCard({}) {
  return (
    <Card height={322} width={315} className={cn(styles.noteCard)}>
    <div className={cn(styles.content)}>
        <span>Please note</span>
        <span className={cn(styles.orderLocation)}>DELIVERY TO MAINLAND</span>
        <span style={{fontWeight:500 , fontSize:17}}>N1000 - N2000</span>
        <hr/>
        <span className={cn(styles.orderLocation)}>DELIVERY TO ISLAND</span>
        <span style={{fontWeight:500 , fontSize:17}}>N2000 - N3000</span>
        <div className={cn(styles.contentButtons)}>
            <a><span>Cancel</span></a>
            <MainButton orange tiny >Proceed</MainButton>
        </div>
    </div>
      
    </Card>
  );
}

export default NoteCard;
