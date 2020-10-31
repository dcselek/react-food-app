import React from "react";
import Head from "next/head";

import OptionCard from "../components/card/option-card";
import InfoCard from "../components/card/info-card";
import Layout from "../components/layout";
import TitleText from "../components/typography/title-text";
import UpperPage from "../components/upper-page";
import MainButton from "../components/buttons/main-button";

function CheckoutDelivery() {
  return (
    <div>
      <Head>
        <title>Checkout Delivery - Food App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <UpperPage>Checkout</UpperPage>
        <TitleText>Delivery</TitleText>
        <InfoCard></InfoCard>
        <OptionCard></OptionCard>
        <div className="bottom-btn">
        <MainButton  orange>
          Proceed to payment
        </MainButton>
        </div>
      </Layout>
    </div>
  );
}

export default CheckoutDelivery;
