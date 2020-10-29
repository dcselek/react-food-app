import React from 'react'
import PriceText from '../components/typography/price-text';

import TitleText from '../components/typography/title-text'

export default {
    title: "Typography",
};

export const titleText = () => <TitleText>Delicious<br/>food for you</TitleText>
export const priceText = () => <PriceText></PriceText>