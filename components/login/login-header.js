import React from 'react';
import cn from 'classnames';

import logo from '../../public/logo.png'
import styles from './login-header.module.css'
import TextButton from '../buttons/text-button';

function LoginHeader(props) {
    return (
        <div className={cn(styles.container)} >
            <img src={logo}></img>
            <div className={cn(styles.buttons)}>
                <TextButton classNames={cn(styles.login)} black selected>Login</TextButton>
                <TextButton black >Sign-Up</TextButton>
            </div>
        </div>
    );
}

export default LoginHeader;