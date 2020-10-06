import React from 'react'

import Order from '../components/order/order'
import Kebab from '../public/kebab.jpg'

export default{
    title: 'Menu Box'
}

export const order = ()=>(
    <div>
    <Order name="Kebab" price='17$' src={Kebab}></Order>
    <Order med name="Kebab" price='17$' src={Kebab}></Order>
    </div>
)
