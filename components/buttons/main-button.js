import React from "react";
import cn from "classnames";
import styles from "./main-button.module.css";
import Button from "./button";

function MainButton({ className,tiny=false,orange=false,white=false,children, ...props }) {
  return (
    <Button
      className={cn(
        styles.mainButton,
        className,
        tiny && styles.tiny,
        orange && styles.orange,
        white && styles.white,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export default MainButton;
