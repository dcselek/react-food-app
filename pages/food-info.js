import React from 'react';
import Head from 'next/head'

import Layout from '../components/layout'
import Splash from '../components/order/splash';
import UpperPage from '../components/upper-page'
import MainButton from '../components/buttons/main-button'

function FoodInfo(props) {
    return (
        <div>
            <Head>
                <title>Food Info - Food App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <UpperPage heart></UpperPage>
                <Splash></Splash>
                <div className="bottom-btn">
                    <MainButton orange>Add to cart</MainButton>
                </div>
            </Layout>
        </div>
    );
}

export default FoodInfo;