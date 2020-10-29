import React from "react";
import cn from "classnames";

import styles from "./card.module.css";

function Card({ className, children, height }) {
  return (
    <div
      className={cn(styles.container, className)}
      style={{ minHeight: height }}
    >
      {children}
    </div>
  );
}

export default Card;
