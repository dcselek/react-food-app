import React from 'react';
import cn from 'classnames'

import styles from './search-food.module.css'
import Order from './order'
import Kebab from '../../public/kebab.jpg'
import Doner from '../../public/doner.jpg'

function SearchFood(props) {
    return (
        <div className={cn(styles.container)}>
            <span>Found 4 results</span>
            <div className={cn(styles.resultContainer)}>
                <Order classNames={cn(styles.food)}  med name="Kebab" price="17$" src={Kebab}></Order>
                <Order classNames={cn(styles.rightFood,styles.food)} med name="Doner" price="15$" src={Doner}></Order>
                <Order classNames={cn(styles.leftFood,styles.food)} med name="Kebab" price="17$" src={Kebab}></Order>
                <Order classNames={cn(styles.rightFood,styles.food)} med name="Doner" price="15$" src={Doner}></Order>
                
            </div>
        </div>
    );
}

export default SearchFood;