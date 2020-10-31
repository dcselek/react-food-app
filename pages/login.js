import React from 'react';
import Head from 'next/head'

import Login from '../components/login/login'
import LoginLayout from '../components/login/login-layout'
import LoginHeader from '../components/login/login-header';
import MainButton from '../components/buttons/main-button';
import Link from 'next/link';
function LoginPage(props) {
    return (
        <div>
            <LoginLayout>
                <LoginHeader></LoginHeader>
                <Login></Login>
                <div className="bottom-btn">
                    <Link href="/main-page">
                        <MainButton orange>Login</MainButton>
                    </Link>
                </div>
            </LoginLayout>
        </div>
    );
}

export default LoginPage;