import React from 'react'
import cn from 'classnames'
import styles from './button.module.css'
function Button () {
    return(
        <button className={cn(styles.button)}><span> Selam </span></button>
    )
}

export default Button