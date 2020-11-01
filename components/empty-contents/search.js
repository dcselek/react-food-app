import React from 'react';
import cn from 'classnames'
import Scope from '../big-icons/Scope'
import styles from './search.module.css'
function SearchNot(props) {
    return (
        <div className={cn(styles.container)}>
            <icon><Scope></Scope></icon>
            <span>Item Not Found</span>
            <span>Try searching the item with<br/>
            a different keyword.</span>
        </div>
    );
}

export default SearchNot;