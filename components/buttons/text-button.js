import React from 'react'
import cn from 'classnames'

import styles from './text-button.module.css'

function TextButton ({selected,black,children,...props}) {
    return(
        <a className={cn(styles.textButton, black && styles.black, selected && styles.selectedButton)} {...props}><span>{children}</span></a>
    )
}

export default TextButton