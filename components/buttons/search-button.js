import React from "react";
import cn from "classnames";
import {Search} from '../icons'
import styles from "./search-button.module.css";

function ButtonSearch() {
  return (
    <div className={cn(styles.container)}>

      <icon><Search></Search></icon>
      <form>
        
        <input type="text" placeholder="Search"></input>
        
      </form>
    </div>
  );  
}

export default ButtonSearch;
