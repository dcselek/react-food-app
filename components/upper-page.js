import React from 'react';
import cn from 'classnames'

import {Heart,Menu,ShoppingCart,ArrowLeft} from './icons'
import styles from './upper-page.module.css'


function UpperPage({children,heart,home}) {
    return (
        <div className={cn(styles.container)}>
            {!home &&  <icon className={cn(styles.leftIcon)}><ArrowLeft></ArrowLeft></icon>}
            {home &&  <icon className={cn(styles.leftIcon)}><Menu></Menu></icon>}
            <span>{children}</span>
            <icon></icon>
            {heart && <icon><Heart></Heart></icon>}
            {home && <icon className={cn(styles.rightIcon)}><ShoppingCart></ShoppingCart></icon>}
        </div>
    );
}

export default UpperPage;