import React from "react";
import cn from "classnames";

import styles from "./option-card.module.css";
import Card from "./card";
import PriceText from '../typography/price-text'

function OptionCard() {
  return (
    <div className={cn(styles.container)}>
    <div className={styles.cardTitle}>
      <span>Delivery Method</span>
    </div>
    <Card height={156}>
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
    <PriceText></PriceText>
    </div>
  );
}

export default OptionCard;
