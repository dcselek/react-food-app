import React from 'react';
import SideMenu from '../components/menu/side-menu';
import Head from 'next/head'
function Menu(props) {
    return (
        <div>
            <Head>
                <title>Menu - Food App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SideMenu></SideMenu>
        </div>
    );
}

export default Menu;