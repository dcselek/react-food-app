import React from 'react';
import cn from 'classnames'

import styles from './title-text.module.css'

function TitleText({children}) {
    return (
        <div className={cn(styles.titleText)}>
            <h2>{children}</h2>
        </div>
    );
}

export default TitleText;