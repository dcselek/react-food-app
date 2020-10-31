import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'
import Link from 'next/link'
import GetStarted from "../components/first-page/first-page";
import MainButton from "../components/buttons/main-button";

function HomePage() {
  return (
    <div>
      <GetStarted>
        <div className="bottom-btn">
          <Link href="/login">
            <MainButton white>Get Started</MainButton>
          </Link>
        </div>
      </GetStarted>
    </div>
  );
}

export default HomePage;
