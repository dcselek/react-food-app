import React from 'react';
import Offers from '../components/empty-contents/offers';
import Layout from '../components/layout'
import UpperPage from '../components/upper-page'
import TitleText from '../components/typography/title-text'
import Head from 'next/head'

function MyOffers(props) {
    return (
        <div>
            <Head>
                <title>My Offers - Food App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>
                <UpperPage></UpperPage>
                <TitleText>My Offers</TitleText>
                <Offers></Offers>
            </Layout>
        </div>
    );
}

export default MyOffers;