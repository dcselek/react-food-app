import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/menu/navbar'
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
                </div>
            </Layout>
        </div>
    );
}

export default MainPage;