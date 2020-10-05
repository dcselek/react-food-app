import React from 'react'
import cn from 'classnames'
import styles from './button.module.css'
function Button ({children,className,...props}) {
    return(
        <button type="button" className={cn(className,styles.button)} {...props}>{children}</button>
    )
}

export default Button