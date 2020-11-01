import React from 'react';
import styles from './offers.module.css'

function Offers(props) {
    return (
        <div className={styles.container}>
            <span>ohh snap!  No offers yet</span>
            <p>Bella dose’t have any offers
            yet please check again.</p>
        </div>
    );
}

export default Offers;