import React from 'react';
import cn from 'classnames'

import styles from './splash.module.css'
import kebab from '../../public/kebab.jpg'

function Splash(props) {
    return (
        <div className={cn(styles.container)}>
        <div className={cn(styles.splashContainer)}>
            <img src={kebab}></img>
            <span> . . .</span>
            <span>Kebab</span>
            <span>17$</span>
        </div>
        <div className={cn(styles.infoContainer)}>
            <span>Delivery Info</span>
            <p>Delivered between monday aug and <br/> thursday 20 from 8pm to 91:32 pm</p>
            <span>Return policy</span>
            <p>All our foods are double checked before <br/> leaving our stores so by any case you <br/> found a broken food please contact our <br/> hotline immediately.</p>
        </div>
        </div>
    );
}

export default Splash;