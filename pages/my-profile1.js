import React from "react";
import Head from 'next/head'

import ProfileCard from "../components/card/profile-card";
import Layout from "../components/layout";
import TitleText from "../components/typography/title-text";
import UpperPage from "../components/upper-page";
import ProfileButton from "../components/buttons/profile-button";
import MainButton from "../components/buttons/main-button";

function MyProfile1() {
  return (
    <div>
      <Head>
        <title>My Profile - Food App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <UpperPage></UpperPage>
        <TitleText>My Profile</TitleText>
        <ProfileCard></ProfileCard>
        <ProfileButton>Orders</ProfileButton>
        <ProfileButton>Pending reviews</ProfileButton>
        <ProfileButton>Faq</ProfileButton>
        <ProfileButton>Help</ProfileButton>
        <div className="bottom-btn">
          <MainButton orange>
            Update
          </MainButton>
        </div>
      </Layout>
    </div>
  );
}

export default MyProfile1;
