import React from 'react';
import cn from 'classnames'

import {GgProfile,Buy,LocalOffer,StickyNote,Security} from '../icons'
import styles from './side-menu.module.css'

function SideMenu() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.buttonContainer)}>
                <icon><GgProfile></GgProfile></icon>
                <span>Profile</span>
                <hr></hr>
            </div>
            <div className={cn(styles.buttonContainer)}>
                <icon><Buy></Buy></icon>
                <span>Orders</span>
                <hr></hr>
            </div>
            <div className={cn(styles.buttonContainer)}>
                <icon><LocalOffer></LocalOffer></icon>
                <span>Offer and Promo</span>
                <hr></hr>
            </div>
            <div className={cn(styles.buttonContainer)}>
                <icon><StickyNote></StickyNote></icon>
                <span>Privacy Policy</span>
                <hr></hr>
            </div>
            <div className={cn(styles.buttonContainer)}>
                <icon><Security></Security></icon>
                <span>Security</span>
            </div>
        </div>
    );
}

export default SideMenu;