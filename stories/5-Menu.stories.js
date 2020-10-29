import React from "react";
import BottomMenu from "../components/menu/bottom-menu";
import Navbar from "../components/menu/navbar";

import SideMenu from '../components/menu/side-menu'

export default {
  title: "Menu",
};

export const sideMenu = () => <SideMenu></SideMenu>
export const bottomMenu = () => <BottomMenu></BottomMenu>
export const navbar = () => <Navbar></Navbar>