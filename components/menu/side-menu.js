import React from 'react';
import cn from 'classnames'

import { GgProfile, Buy, LocalOffer, StickyNote, Security, ArrowRight } from '../icons'
import styles from './side-menu.module.css'
import SignOut from '../icons/Sign-out'
import FoodInfo from '../../pages/food-info';
import UpperPage from '../upper-page';
import TitleText from '../typography/title-text';
import kebab from '../../public/kebab.jpg'

function SideMenu() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.menuContainer)}>
                <div className={cn(styles.sidemenu)}>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><GgProfile></GgProfile></icon>
                        <span>Profile</span>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><Buy></Buy></icon>
                        <span>Orders</span>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><LocalOffer></LocalOffer></icon>
                        <span>Offer and Promo</span>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><StickyNote></StickyNote></icon>
                        <span>Privacy Policy</span>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><Security></Security></icon>
                        <span>Security</span>
                    </div>

                </div>

                <div className={cn(styles.lastButton)}>
                    <span>Sign-Out</span>
                    <icon><SignOut /></icon>
                </div>

            </div>
            <div className={cn(styles.pContainer)}>
                <div className={styles.content}>
                <UpperPage></UpperPage>
                <TitleText>Foods</TitleText>
                <img src={kebab}></img>
                <span>Kebab <br/></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <span>Information</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;