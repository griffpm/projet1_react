import React from 'react'
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from './TitleSection';
import Carte1 from './cards/Carte1';

export default function SectionFeatures() {
    return (
    <div>
        <div className='bg-blue-200 py-6 flex justify-center'>
        <BsInfoSquare className='text-2xl' />
        <p>Philosophie: Simplicité, Bonnes pratiques et haute performance.</p>
        </div>
        <div className='py-2 px-20 mr-auto ml-auto w-[80%]'>
            <TitleSection title="FEATURES" subtitle="What you get with Astro Wind" description="You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. " />
        </div>
        <div className='flex display-center mr-auto ml-auto w-[80%]'>
            <div>
                <Carte1 image="tailwind.svg" titre="Astro + Tailwind CSS Integration" texte="A seemless integration between two great frameworks that offer high productivity, performance and versatility." />
                <Carte1 image="square-small.png" titre="Ready-to-use Components" texte="widget made with Tailwing CSS ready to be used in marketing website, SaaS, blog, personal profiles, small business..." />
                <Carte1 image="list-check.png" titre="Best Practices" texte="Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?" />
            </div>
            <div>
                <Carte1 image="rocket-lunch.png" titre="Excellent Page Speed" texte="The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men." />
                <Carte1 image="exchange.png" titre="Search Engine Optimization (SEO)" texte="Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do." />
                <Carte1 image="bulb.png" titre="Open to new ideas and contributions" texte=" Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store." />
            </div>
        </div>
    </div>
    )
}
