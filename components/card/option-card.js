import React from "react";
import cn from "classnames";

import styles from "./option-card.module.css";
import Card from "./card";

function OptionCard() {
  return (
    <Card height={315} width={156}>
      <div className={cn(styles.optionCard)}>
        <form>
            <input type="radio" value="Door"/>
            <label for="Door">Door delivery</label>
            <input type="radio" value="Pick"/>
            <label for="Pick">Pick up</label>
        </form>
      </div>
    </Card>
  );
}

export default OptionCard;
