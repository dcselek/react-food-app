import React from 'react'

import Card from '../components/card/card'
import OptionCard from '../components/card/option-card'
import InfoCard from '../components/card/info-card'
import ProfileCard from '../components/card/profile-card'
import pp from '../public/pp.jpg'
import NoteCard from '../components/card/note-card'

export default{
    title: 'Card'
}

export const optionCard = () => <OptionCard></OptionCard>
export const infoCard = () => <InfoCard></InfoCard>
export const card = () => <Card width={200} height={200} ></Card>
export const profileCard = () => <ProfileCard src={pp}></ProfileCard>
export const noteCard = () => <NoteCard></NoteCard>