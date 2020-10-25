import React from 'react';
import cn from 'classnames'

import {Home,Heart1,User,History} from '../icons'
import styles from './bottom-menu.module.css'

function BottomMenu(props) {
    return (
        <div className={cn(styles.container)}>
            <icon><Home></Home></icon>
            <icon><Heart1></Heart1></icon>
            <icon><User></User></icon>
            <icon><History></History></icon>
        </div>
    );

}

export default BottomMenu ;