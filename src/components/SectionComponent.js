import React from 'react'
import TitleSection from './TitleSection'
import Carte3 from './cards/Carte3'
import Carte4 from './cards/Carte4'
import { dataCard } from '../data/DataCardComponent';

export default function SectionComponent() {
    return (

        <section className='bg-blue-100'>
            
            <TitleSection title="component" subtitle="Most used Widget" description="Provides frquently used components for building website using Tailwind CSS"/>
            
            <div className='grid grid-cols-3 gap-2 mt-2 pt-16 w-[80%] ml-auto mr-auto'>
                        {dataCard.map((item, index) => (
                        <Carte3
                        key={index}
                            image={item.image} 
                            titre={item.titre} 
                            texte={item.texte} />
                        ))} 
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
        </section>
    )
}
