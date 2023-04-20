import React from 'react'
import TitleSection from './TitleSection'
import Carte5 from './cards/carte5'
import CarteStat from './cards/CarteStat'
import CarteFin from './cards/CarteFin'

export default function SectionFAQ() {
    return (
    <div>
        <TitleSection title="FAQS" subtitle="Frequently Asked Questions" description="Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work." />
        <div className='flex'>
            <div>
                <Carte5 titre="What do I need to start?" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />
                <Carte5 titre="How to install the Astro + tailwing css template" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />
                <Carte5 titre="What's something that you don't understand?" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />
            </div>
            <div>
                <Carte5 titre="What's an example of when you changed your mind?" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />
                <Carte5 titre="What is something that you would like to try again?" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />
                <Carte5 titre="If you could only ask one question to each person you meet, what would that question be?" texte="Social currency synergize productive mindfulness, so globalize. Viral engagement it's a simple lift and shift job weâ€™re all in this together, even if our businesses function differently what's our go to market strategy? t-shaped individual are there any leftovers in the kitchen?. We need to socialize the comms with the wider stakeholder community we need to get the vernacular right." />    
            </div>
            
        </div>

        <div>
            <CarteStat nombre="132K" mot="download" />
            <CarteStat nombre="24.8K" mot="stars" />
            <CarteStat nombre="10.3K" mot="forks" />
            <CarteStat nombre="48.8K" mot="users" />
        </div>
        
        <CarteFin />
    </div>

    
    )
}
