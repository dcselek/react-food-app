import React from "react";
import cn from "classnames";

import styles from "./order.module.css";

function Order({ classNames, src, alt, name = "", price = "", med, tiny }) {
  return (
    <div
      className={cn(
        styles.container,
        classNames,
        med && styles.medContainer,
        tiny && styles.tinyContainer
      )}
    >
      <img src={src} alt={alt}></img>
      <div className={cn(styles.orderTexts)}>
        <div className={cn(styles.orderName)}>{name}</div>
        <div className={cn(styles.orderSalary)}>{price}</div>
      </div>
    </div>
  );
}

export default Order;
