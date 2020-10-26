import React from 'react'
import cn from 'classnames'
import{
    Bank,
    Paypal,
    Group,
} from '../icons'

import styles from './card-icon.module.css'

function CardIcon ({paypal=false,bank=false,card=false,className}) {
    return(
        <icon className={cn(
            className,
            paypal && styles.paypal,
            bank && styles.bank,
            card && styles.card,
            
        )}>
            {paypal && <Paypal></Paypal>}
            {bank && <Bank></Bank>}
            {card && <Group/>}
        </icon>
    )
}

export default CardIcon 