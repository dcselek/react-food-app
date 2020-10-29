import React from 'react'
import UpperPage from '../components/upper-page';
import CheckoutDelivery from '../pages/checkout-delivery';
import CheckoutPayment from '../pages/checkout-payment';
import MyProfile from '../pages/my-profile';
import MyProfile1 from '../pages/my-profile1';
import History from '../pages/history'
import pp from "../public/pp.jpg";
import Orders from '../pages/orders';

export default {
    title: "Pages",
};
  

export const upperPage = () => (
<div>
<UpperPage>My Profile</UpperPage>
<UpperPage heart></UpperPage>
<UpperPage home></UpperPage>
</div>)

export const myProfile = () => <MyProfile></MyProfile>
export const checkoutDelivery = ()=> <CheckoutDelivery></CheckoutDelivery>
export const checkoutPayment = () => <CheckoutPayment></CheckoutPayment>
export const myProfile1 = () => <MyProfile1></MyProfile1>
export const history = () => <History></History>
export const orders = () => <Orders></Orders>