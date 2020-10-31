import React from 'react';
import cn from 'classnames'

import styles from './first-page.module.css'
import logo from '../../public/logo.png'
function GetStarted({ children }) {
    return (
        <div className={cn(styles.layout)}>
            <div className={cn(styles.container)}>
                <div className={cn(styles.logo)}>
                    <img src={logo} />
                </div>
                <h1>Food for <br /> Everyone</h1>
                {children}
            </div>
        </div>
    );
}

export default GetStarted;