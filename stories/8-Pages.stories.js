import React from 'react'
import UpperPage from '../components/upper-page';
import CheckoutDelivery from '../pages/checkout-delivery';
import CheckoutPayment from '../pages/checkout-payment';
import MyProfile from '../pages/my-profile';
import MyProfile1 from '../pages/my-profile1';
import History from '../pages/history'
import pp from "../public/pp.jpg";
import Orders from '../pages/orders';
import NoInternet from '../pages/no-internet';
import LoginPage from '../pages/login';
import FoodInfo from '../pages/food-info';
import HomePage from '../pages';
import MainPage from '../pages/main-page';
import NotFound from '../pages/not-found';
import Menu from '../pages/menu'
import MyOffers from '../pages/my-offers'
import Search from '../pages/search'

export default {
    title: "Pages",
};


export const upperPage = () => (
    <div>
        <UpperPage>My Profile</UpperPage>
        <UpperPage heart></UpperPage>
        <UpperPage home></UpperPage>
    </div>
)

export const index = () => <HomePage></HomePage>
export const mainPage = () => <MainPage></MainPage>
export const myProfile = () => <MyProfile></MyProfile>
export const checkoutDelivery = () => <CheckoutDelivery></CheckoutDelivery>
export const checkoutPayment = () => <CheckoutPayment></CheckoutPayment>
export const myProfile1 = () => <MyProfile1></MyProfile1>
export const history = () => <History></History>
export const orders = () => <Orders></Orders>
export const internet = () => <NoInternet></NoInternet>
export const login = () => <LoginPage></LoginPage>
export const foodInfo = () => <FoodInfo></FoodInfo>
export const notFound = () => <NotFound></NotFound>
export const menu = () => <Menu></Menu>
export const myOffers = () => <MyOffers></MyOffers>
export const search = () => <Search></Search>