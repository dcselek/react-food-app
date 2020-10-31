import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import UpperPage from "../components/upper-page";
import LittleInfoCard from "../components/card/little-info-card";
import PaymentCard from "../components/card/payment-card";
import MainButton from "../components/buttons/main-button";

function MyProfile() {
  return (
    <div>
      <Head>
        <title>My Profile - Food App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout className="myProfile">
        <UpperPage>My Profile</UpperPage>
        <LittleInfoCard></LittleInfoCard>
        <PaymentCard paypalMethod></PaymentCard>
        <div className="bottom-btn">
          <MainButton orange>Update</MainButton>
        </div>
      </Layout>
    </div>
  );
}

export default MyProfile;
