import React from 'react';
import cn from 'classnames'

import { Wifi } from '../big-icons/index'
import styles from './internet.module.css'
import MainButton from '../buttons/main-button';
function Internet() {
    return (
        <div className={cn(styles.container)}>
            <icon><Wifi></Wifi></icon>
            <span>No internet Connection</span>
            <p>Your internet connection is currently<br />
            not available please check or try again.</p>
            <MainButton orange>Try Again</MainButton>
        </div>
    );
}

export default Internet;