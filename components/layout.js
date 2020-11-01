import React from 'react';
import cn from 'classnames';

import styles from './layout.module.css'

function Layout({classNames,children,search}) {
    return (
        <div className={cn(styles.layout,classNames, search && styles.searchLayout)}>
            <div className={cn(styles.container)}>
            {children}
            </div>
        </div>
    );
}

export default Layout;