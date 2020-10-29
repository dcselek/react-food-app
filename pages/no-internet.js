import React from 'react';
import Head from 'next/head'

import Layout from '../components/layout'
import Internet from '../components/empty-contents/internet'

function NoInternet() {
    return (
        <div>
            <Head>
                <title>Please Internet Connection</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Internet></Internet>
            </Layout>
        </div>
    );
}

export default NoInternet;