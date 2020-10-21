import React from "react";
import cn from "classnames";

import styles from "./option-card.module.css";
import Card from "./card";

function OptionCard() {
  return (
    <div>
    <div className={styles.cardTitle}>
      <span>Delivery Method</span>
    </div>
    <Card height={156} width={315}>
      <div className={cn(styles.optionCard)}>
        <form>
          <div>
            <label className={cn(styles.label)}>
              <input
                name="Option"
                id="Door"
                type="radio"
                value="Door"
                checked="checked"
              />
              <span className={cn(styles.checkmark)}></span>
              Door Delivery
            </label>
          </div>
          <hr></hr>
          <div>
            
            <label className={cn(styles.label)}>
            <input
              name="Option"
              id="Pick"
              type="radio"
              value="Pick"
              checked="checked"
            />
            <span className={cn(styles.checkmark)}></span>
            Pick Up
            </label>
          </div>
        </form>
      </div>
    </Card>
    </div>
  );
}

export default OptionCard;
