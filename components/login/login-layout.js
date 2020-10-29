import React from 'react';
import cn from 'classnames';

import styles from './login-layout.module.css'

function LoginLayout({classNames,children}) {
    return (
        <div className={cn(styles.layout,classNames)}>
            <div className={cn(styles.container)}>
            {children}
            </div>
        </div>
    );
}

export default LoginLayout;