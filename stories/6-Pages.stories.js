import React from 'react'
import UpperPage from '../components/upper-page';
import MyProfile from '../pages/my-profile';
import pp from "../public/pp.jpg";

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