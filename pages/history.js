import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import UpperPage from "../components/upper-page";
import HistoryOrders from "../components/empty-contents/history-orders";
import MainButton from "../components/buttons/main-button";

function History(props) {
  return (
    <div>
      <Head>
        <title>History - Food App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <UpperPage>History</UpperPage>
        <HistoryOrders history></HistoryOrders>
        
        <MainButton classNames="bottom-btn" orange>Start ordering</MainButton>
        
      </Layout>
    </div>
  );
}

export default History;
