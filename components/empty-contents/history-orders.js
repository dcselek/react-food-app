import React from 'react';
import cn from 'classnames'
import {BigOrders,Calendar} from '../big-icons/index'
import styles from './history-orders.module.css'

function HistoryOrders({history = false}) {
    return (
        <div className={cn(styles.container)}>
            {history && <icon><Calendar></Calendar></icon>}
            {history && <span>No History Yet</span>}
            {!history && <icon><BigOrders></BigOrders></icon>}
            {!history && <span>No Orders Yet</span>}
            <p>Hit the orange button down<br/>
                below to Create an order</p>
        </div>
    );
}

export default HistoryOrders;