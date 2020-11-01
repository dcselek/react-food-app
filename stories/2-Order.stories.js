import React from "react";

import Order from "../components/foods/order";
import SearchFood from "../components/foods/search-food";
import Splash from "../components/foods/splash";
import Kebab from "../public/kebab.jpg";

export default {
  title: "Menu Box",
};

export const orderNormal = () => (
  <Order name="Kebab" price="17$" src={Kebab}></Order>
);

export const orderMedium = () => (
  <Order med name="Kebab" price="17$" src={Kebab}></Order>
);
export const orderTiny = () => (
  <Order tiny name="Veggie tomato mix" price="17$" src={Kebab}></Order>
);

export const splash = () => <Splash></Splash>
export const searchFood = () => <SearchFood></SearchFood>