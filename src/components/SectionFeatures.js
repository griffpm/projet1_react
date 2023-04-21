import React from 'react'
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from './TitleSection';
import Carte1 from './cards/Carte1';
import { dataCards } from '../data/DataCardFeature';


export default function SectionFeatures() {
    
    return (
        <section>
        <div>
            <div className='bg-blue-200 py-6 flex justify-center'>
            <BsInfoSquare className='text-2xl' />
            <p>Philosophie: Simplicité, Bonnes pratiques et haute performance.</p>
            </div>


            <div className='py-2 px-20 mr-auto ml-auto w-[80%]'>
                <TitleSection title="FEATURES" subtitle="What you get with Astro Wind" description="You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. " />
            </div>

            <div className='flex display-center mr-auto ml-auto w-[80%]'>
                <div className='px-20 pb-12'>
                
                    <div className='grid grid-cols-2 gap-y-8'>
                    {dataCards.map((item, index) => (
                    <Carte1
                    key={index}
                        image={item.image} 
                        titre={item.titre} 
                        texte={item.texte} />
                    ))} 
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
