import React from 'react';
import cn from 'classnames'

import { GgProfile, Buy, LocalOffer, StickyNote, Security} from '../icons'
import styles from './side-menu.module.css'
import SignOut from '../icons/Sign-out'
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
                        <a>Profile</a>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><Buy></Buy></icon>
                        <a>Orders</a>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><LocalOffer></LocalOffer></icon>
                        <a>Offer and Promo</a>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><StickyNote></StickyNote></icon>
                        <a>Privacy Policy</a>
                    </div>
                    <div className={cn(styles.buttonContainer)}>
                        <icon><Security></Security></icon>
                        <a>Security</a>
                    </div>

                </div>

                <div className={cn(styles.lastButton)}>
                    <a>Sign-Out</a>
                    <icon><SignOut /></icon>
                </div>

            </div>
            <div className={cn(styles.pContainer)}>
                <div className={styles.content}>
                <UpperPage></UpperPage>
                <TitleText>Food</TitleText>
                <img src={kebab}></img>
                <h4>Kebab <br/></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h4>Information</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;