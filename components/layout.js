import React from 'react';
import cn from 'classnames';

import styles from './layout.module.css'

function Layout({classNames,children}) {
    return (
        <div className={cn(styles.layout,classNames)}>
            <div className={cn(styles.container)}>
            {children}
            </div>
        </div>
    );
}

export default Layout;