import React from 'react';
import cn from 'classnames';

import {ArrowRight} from "../icons"
import styles from './profile-button.module.css'

function ProfileButton({children}) {
    return (
        <button className={cn(styles.container)}>
            <span>{children}</span>
            <icon><ArrowRight></ArrowRight></icon>
        </button>
    );
}

export default ProfileButton;