import React from 'react'
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from './TitleSection';

export default function SectionFeatures() {
    return (
    <div>
        <div className='bg-blue-200 py-6 flex justify-center'>
        <BsInfoSquare className='text-2xl' />
        <p>Philosophie: Simplicité, Bonnes pratiques et haute performance.</p>
        </div>
        <div className='py-2 px-20'>
            <TitleSection title="FEATURES" subtitle="What you get with Astro Wind" description="lorem kndz kzndnz k ozozn zpjznd od,dz ozdknc oon eokspz, zonz dozzn coivuye zidz " />

        </div>
    </div>
    )
}
