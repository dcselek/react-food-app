import React from 'react'
import Button from '../components/buttons/button'
import MainButton from '../components/buttons/main-button'
import TextButton from '../components/buttons/text-button'



export default{
    title: 'Buttons'
}


export const Normal = () => <Button>Hi!</Button>
export const mainButton = () => (
    <div>
<MainButton orange>Get Started</MainButton>
<MainButton white>Get Started</MainButton>
<MainButton orange tiny>Proceed</MainButton>
</div>
)

export const textButton = () => (
<div>
<TextButton selected black>Login</TextButton>
<TextButton>Foods</TextButton>
<TextButton selected>Foods</TextButton>

</div>
)