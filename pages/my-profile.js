import React from "react";


import Layout from "../components/layout";
import UpperPage from "../components/upper-page";
import LittleInfoCard from "../components/card/little-info-card";
import PaymentCard from "../components/card/payment-card";
import MainButton from "../components/buttons/main-button";

function MyProfile() {
  return (
    <Layout>
      
        <UpperPage>My Profile</UpperPage>
        <LittleInfoCard></LittleInfoCard>
        <PaymentCard paypalMethod></PaymentCard>
        <MainButton classNames="mp-btn" orange>Update</MainButton>
    
      <style jsx>{`
        .mp-btn{
            margin-top: 162px;
        }
        `}</style>
    </Layout>
  );
}

export default MyProfile;
