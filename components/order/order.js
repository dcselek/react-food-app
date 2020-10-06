import React from "react";
import cn from "classnames";

import styles from "./order.module.css";

function Order({ className, src, alt, name = "", price = "",med }) {
  return (
    <div className={cn(styles.container, className,med && styles.medContainer)}>
      <img src={src} alt={alt}></img>
      <div className={cn(styles.orderTexts)}>
        <div className={cn(styles.orderName)}>{name}</div>
        <div className={cn(styles.orderSalary)}>{price}</div>
      </div>
    </div>
  );
}

export default Order;
