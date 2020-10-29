import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/menu/navbar";
import Layout from '../components/layout'

function HomePage() {
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

export default HomePage;
