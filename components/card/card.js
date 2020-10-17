import React from "react";
import cn from "classnames";

import styles from "./card.module.css";

function Card({ className, children, width, height }) {
  return (
    <div
      className={cn(styles.container, className)}
      style={{ maxWidth: width, minHeight: height }}
    >
      {children}
    </div>
  );
}

export default Card;
