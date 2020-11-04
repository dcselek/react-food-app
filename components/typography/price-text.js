import React from 'react';
import cn from 'classnames'

import styles from './price-text.module.css'

function PriceText() {
    return (
        <div className={cn(styles.priceText)}>
            <h5>Total</h5>
            <p>23$</p>
        </div>
    );
}

export default PriceText;