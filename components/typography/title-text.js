import React from 'react';
import cn from 'classnames'

import styles from './title-text.module.css'

function TitleText({children}) {
    return (
        <div className={cn(styles.titleText)}>
            <span>{children}</span>
        </div>
    );
}

export default TitleText;