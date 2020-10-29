import React from 'react';
import cn from 'classnames'

import styles from './price-text.module.css'

function PriceText() {
    return (
        <div className={cn(styles.priceText)}>
            <span>Total</span>
            <span>23$</span>
        </div>
    );
}

export default PriceText;