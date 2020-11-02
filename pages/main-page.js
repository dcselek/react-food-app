import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/menu/navbar'
import TitleText from '../components/typography/title-text'
import ButtonSearch from '../components/buttons/search-button'
import TextButton from '../components/buttons/text-button';
import Order from '../components/foods/order'

import Kebab from '../public/kebab.jpg'
import Doner from '../public/doner.jpg'
import BottomMenu from '../components/menu/bottom-menu';
function MainPage(props) {
    return (
        <div>
            <Head>
                <title>Homepage - Food App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <div>
                    <Navbar></Navbar>
                    <TitleText>Delicious <br />
                    food for you</TitleText>
                    <ButtonSearch></ButtonSearch>
                    <nav className="main-page-nav">
                        <TextButton selected>Foods</TextButton>
                        <TextButton >Drinks</TextButton>
                        <TextButton >Snacks</TextButton>
                        <TextButton >Sauces</TextButton>
                    </nav>
                    <div className="main-page-foods">
                        <a>see more</a>
                        <Order name="Kebab" price="17$" src={Kebab}></Order>
                        <Order name="Doner" price="15$" src={Doner}></Order>
                    </div>

                    <BottomMenu></BottomMenu>
                </div>
            </Layout>
        </div>
    );
}

export default MainPage;