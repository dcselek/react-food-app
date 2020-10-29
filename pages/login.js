import React from 'react';
import Head from 'next/head'

import Login from '../components/login/login'
import LoginLayout from '../components/login/login-layout'
import LoginHeader from '../components/login/login-header';
import MainButton from '../components/buttons/main-button';
function LoginPage(props) {
    return (
        <div>
            <LoginLayout>
                <LoginHeader></LoginHeader>
                <Login></Login>
                <MainButton classNames="bottom-btn" orange>Login</MainButton>
            </LoginLayout>
        </div>
    );
}

export default LoginPage;