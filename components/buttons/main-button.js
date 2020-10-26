import React from "react";
import cn from "classnames";
import styles from "./main-button.module.css";
import Button from "./button";

function MainButton({ classNames,tiny=false, orange=false,white=false,children, ...props }) {
  return (
    <Button
      className={cn(
        
        styles.mainButton,
        
        tiny && styles.tiny,
        orange && styles.orange,
        white && styles.white,
        classNames,
        
      )}
    >
      {children}
    </Button>
  );
}

export default MainButton;
