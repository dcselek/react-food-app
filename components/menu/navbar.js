import React, { useState } from 'react';
import cn from 'classnames'
import styles from './navbar.module.css';
import Link from 'next/link'
import * as AiIcons from 'react-icons/ai';
import { GgProfile, Buy, LocalOffer, StickyNote, Security, Menu, ShoppingCart } from '../icons'

function Navbar() {
    const [open, setOpen] = useState(false);

    const openSideBar = () => setOpen(!open);

    return (
        <div>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.menuIcon)}>
                    <a><Menu onClick={openSideBar} /></a>
                    <Link href="/orders">
                        <a className={cn(styles.rightIcon)}><ShoppingCart></ShoppingCart></a>
                    </Link>
                </div>

            </div>
            <nav className={open ? cn(styles.navbar, styles.open) : cn(styles.navbar, styles.close)}>
                <ul className={cn()}>
                    <div className={cn(styles.navIcon)}>
                        <span>Menu</span>
                        <AiIcons.AiOutlineClose cursor={'pointer'} size={30} style={{ fill: 'white', marginLeft: '' }} onClick={openSideBar} />

                    </div>
                    <li>
                        <icon><GgProfile /></icon>
                        <Link href="/my-profile">
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <icon><Buy /></icon>
                        <Link href="/orders">

                            <a>Orders</a>
                        </Link>
                    </li>
                    <li>
                        <icon><LocalOffer /></icon>
                        <Link href="/history">

                            <a>History</a>
                        </Link>
                    </li>
                    <li>
                        <icon><StickyNote /></icon>
                        <Link href="/checkout-delivery">

                            <a>Delivery</a>
                        </Link>
                    </li>
                    <li>
                        <icon><StickyNote /></icon>
                        <Link href="/checkout-payment">

                            <a>Payment</a>
                        </Link>
                    </li>
                    <li>
                        <icon><Security /></icon>
                        <Link href="/my-profile1">
                            <a>My Profile1</a>
                        </Link>
                    </li>
                    <li>
                        <icon><Security /></icon>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <icon><Security /></icon>
                        <Link href="/food-info">
                            <a>Food Info</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;