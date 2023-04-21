import React from 'react'
import TitleSection from './TitleSection'
import Carte3 from './cards/Carte3'
import Carte4 from './cards/Carte4'

export default function SectionComponent() {
    return (
    <div>
        <TitleSection title="component" subtitle="Most used Widget" description="Provides frquently used components for building website using Tailwind CSS"/>
        <div className='flex justify-center align-center flex-warp'>
            <Carte3 image="img/header.png" titre="Headers" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/photo.png" titre="Heros" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/document.png" titre="Features" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/content-writing.png" titre="Content" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/advertising.png" titre="Call-to-actions" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/price-tag.png" titre="Pricing" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/testimonial.png" titre="Testimonials" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/contacts.png" titre="Contacts" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />

            <Carte3 image="img/footer.png" titre="Footers" texte="The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot." />


        </div>
        <div>
            <div className='flex justify-between my-4'>
                <p className='font-bold text-2xl w-[45%]' >Find out more content <br /> in our blog</p>
                <p className='w-[45%]'>The most significant things we can think about, when we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future. The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world. Learning to live and learning to work together.</p>
            </div>
            <div className='flex justify-center'>
                <Carte4 image="img/5.jpg" titre="Get started with AstroWind to create a website using astro and tailwind css" texte="The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world." />
                <Carte4 image="img/6.jpg" titre="Usefool tools and resources to create a profesional website" texte="The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world." />
                <Carte4 image="img/7.jpg" titre="AstroWind template in depth" texte="The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world." />
                <Carte4 image="img/7.jpg" titre="How to customize AstroWind template to suit your branding" texte="The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world." />
            </div>
        </div>
    </div>
    )
}
