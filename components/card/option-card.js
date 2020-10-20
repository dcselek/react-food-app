import React from "react";
import cn from "classnames";

import styles from "./option-card.module.css";
import Card from "./card";

function OptionCard() {
  return (
    <Card height={156} width={315}>
      <div className={cn(styles.optionCard)}>
        <form>
          <input name="Option" id="Door" type="radio" value="Door" />
          <label htmlFor="Door">Door delivery</label>
          <input name="Option" id="Pick" type="radio" value="Pick" />
          <label htmlFor="Pick">Pick up</label>
        </form>
      </div>
    </Card>
  );
}

export default OptionCard;
