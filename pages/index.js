import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Homepage - Food App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        umutbasalt
        <br></br>
        <Link href="/login">
          <a>Login Page</a>
        </Link>
        <br></br>
        <Link href="/checkout-delivery">
          <a>Delivery</a>
        </Link>
        <br></br>
        <Link href="/checkout-payment">
          <a>Payment</a>
        </Link>
        <br></br>
        <Link href="/my-profile">
          <a>My Profile</a>
        </Link>
        <br></br>
        <Link href="/my-profile1">
          <a>My Profile-1</a>
        </Link>
        <br></br>
        <Link href="/history">
          <a>History</a>
        </Link>
        <br></br>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
        <br></br>
        <Link href="/no-internet">
          <a>No Internet</a>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
