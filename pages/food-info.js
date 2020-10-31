import React from 'react';

import Layout from '../components/layout'
import Splash from '../components/order/splash';
import UpperPage from '../components/upper-page'
import MainButton from '../components/buttons/main-button'

function FoodInfo(props) {
    return (
        <Layout>
            <UpperPage heart></UpperPage>
            <Splash></Splash>
            <MainButton classNames="bottom-btn" orange>Add to cart</MainButton>
        </Layout>
    );
}

export default FoodInfo;